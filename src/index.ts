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

const objectSmoothing = (object: {[name: string]: string | number}): string[] => {
  const args: string[] = []
  Object.keys(object).forEach((key) => {
    args.push(`${key}:${object[key]}`)
  })
  return args
}

const resultFactory = (item: string | IResultObjectItem) => {
  if(typeof item === 'string'){
    return item
  }
  return objectSmoothing(item).join(',')
}

class QueryBuilder {
  private readonly _name: string
  private readonly _args: IArguments
  private readonly _results: any[]

  constructor(name: string, args: IArguments, results: any[]) {
    this._name = name
    this._args = args
    this._results = results
  }

  toString() {
    const {_args, _results} = this
    let _string = this._name
    if(_args){
      _string += `(${objectSmoothing(_args).join(',')})`
    }
    if(_results){
      _string += `{${_results.map(resultFactory).join(',')}}`
    }
    return _string
  }
}

export default (name: string) => {
  return (args: IArguments) => {
    return (...results: any[]) => {
      return new QueryBuilder(name, args, results)
    }
  }
}


