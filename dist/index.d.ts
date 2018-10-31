export interface IArguments {
    [name: string]: string | number;
}
export interface IQueryBuilderPayload {
    name: string[];
    args: IArguments;
    results: any[];
}
export interface IRequestOptions {
    cache?: RequestCache;
    credentials?: RequestCredentials;
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    signal?: AbortSignal;
    window?: any;
}
export declare class QueryBuilder {
    private readonly _name;
    private readonly _args;
    private readonly _results;
    constructor({ name, args, results }: IQueryBuilderPayload);
    toString(covered?: boolean): string;
    request(url: string, params?: any, options?: IRequestOptions): Promise<any>;
}
declare const _default: (...name: string[]) => (args: any) => (...results: any[]) => QueryBuilder;
export default _default;
