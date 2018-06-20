export interface IArguments {
  [name: string]: string | number
}
export type TQueryFunction = () => {}
export interface IQueries {
  [name: string]: TQueryFunction
}

interface IResultObjectItem {
  [name: string]: string
}

const dataDeco = (data: any, argumentMode: boolean = true): string => {
  if(typeof data === 'string'){
    return `"${data}"`
  }
  if(typeof data === 'number'){
    return `${String(data)}`
  }
  if(data instanceof QueryBuilder){
    return `${data.toString()}`
  }
  if(typeof data === 'function'){
    return dataDeco(data())
  }
  if(Array.isArray(data)){
    if(argumentMode){
      return `[${data.map((value) => (dataDeco(value))).join(',')}]`
    }
    return `{${data.map((value) => {
      // string won't be changed in the argumentMode
      return typeof value === 'string' ? value : dataDeco(value, argumentMode)
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
  argumentMode: boolean = true
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
    args.push(`${key}${separator}${dataDeco(data, argumentMode)}`)
  })
  return args
}

const resultFactory = (item: string | IResultObjectItem) => {
  if(typeof item === 'string'){
    return item
  }
  return objectSmoothing(item, false).join(',')
}

interface IQueryBuilderPayload {
  name: string[]
  args: IArguments
  results: any[]
}

class QueryBuilder {
  private readonly _name: string[]
  private readonly _args: IArguments
  private readonly _results: any[]

  constructor({name, args, results}: IQueryBuilderPayload) {
    this._name = name
    this._args = args
    this._results = results
  }

  toString() {
    const {_args, _results} = this
    let _string = this._name.join(':')
    if(_args){
      _string += `(${objectSmoothing(_args).join(',')})`
    }
    if(_results && _results.length > 0){
      _string += `{${_results.map(resultFactory).join(',')}}`
    }
    return _string
  }
}

export default (...name: string[]) => {
  return (args: any) => {
    return (...results: any[]) => {
      return new QueryBuilder({
        name,
        results,
        args,
      })
    }
  }
}


