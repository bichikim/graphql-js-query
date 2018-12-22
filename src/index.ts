export interface IArguments {
  [name: string]: string | number
}

const decorateData = (data: any, argumentMode: boolean = true): string => {
  if(typeof data === 'string'){
    return `"${data}"`
  }
  if(typeof data === 'number'){
    return `${String(data)}`
  }
  if(data instanceof QueryBuilder){
    return `${data.toString()}`
  }
  if(Array.isArray(data)){
    if(argumentMode){
      return `[${data.map((value) => (decorateData(value))).join(',')}]`
    }
    return `{${data.map((value) => {
      // only in array
      // string won't be changed in the none argumentMode
      return typeof value === 'string' ? value : decorateData(value, argumentMode)
    }).join(',')}}`
  }
  const result: string = objectSmoothing(data, argumentMode).join(',')
  if(argumentMode){
    return `{${result}}`
  }
  return `${result}`
}

const objectSmoothing = (
  object: {[name: string]: string | number | QueryBuilder},
  argumentMode: boolean = true,
): string[] => {
  const args: string[] = []

  Object.keys(object).forEach((key) => {
    const data = object[key]
    let separator = ':'
    if(!argumentMode){
      const type = typeof data
      if(type !== 'string' && type !== 'number' && !(data instanceof QueryBuilder)){
        separator = ''
      }
    }
    args.push(`${key}${separator}${decorateData(data, argumentMode)}`)
  })
  return args
}

export interface IQueryBuilderPayload {
  name: string[]
  args?: IArguments
  results: string[]
}

export interface IRequestOptions {
  cache?: RequestCache
  credentials?: RequestCredentials
  headers?: HeadersInit
  integrity?: string
  keepalive?: boolean
  method?: string
  mode?: RequestMode
  redirect?: RequestRedirect
  referrer?: string
  referrerPolicy?: ReferrerPolicy
  signal?: AbortSignal
  window?: any
}

export class QueryBuilder {
  private readonly _name: string[]
  private readonly _args?: IArguments
  private readonly _results: any[]

  constructor({name, args, results}: IQueryBuilderPayload) {
    this._name = name
    this._args = args
    this._results = results
  }

  toString(covered: boolean | 'query' | 'mutation' = false) {
    const _results = this._results
    const _args = this._args
    let _string = this._name.join(':')
    if(typeof _args === 'object' && Object.keys(_args).length > 0){
      _string += `(${objectSmoothing(_args).join(',')})`
    }
    if(_results && _results.length > 0){
      _string += `${decorateData(_results, false)}`
    }
    if(covered === true || covered === 'query'){
      return `{${_string}}`
    }
    if(covered === 'mutation'){
      return `mutation{${_string}}`
    }
    return _string
  }

  request(url: string, params?: any, options: IRequestOptions = {}): Promise<any> {
    const {headers = [], ...otherOptions} = options
    const graphqlQuery = this.toString()
    const body: any = {
      query: graphqlQuery,
    }
    if(params){
      body.variables = params
    }
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        query: graphqlQuery,
        variables: params ? params : undefined,
      }),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      ...otherOptions,
    })
  }
}

export default (...name: string[]) => {
  return (args?: IArguments) => {
    return (...results: string[]) => {
      return new QueryBuilder({
        name,
        results,
        args,
      })
    }
  }
}
