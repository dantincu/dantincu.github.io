import { AxiosRequestConfig, AxiosResponse } from "axios";
import { IHash, IRefValue } from "../core/core";
import { TrmrkAxios, TrmrkAxiosApiResult } from "../axios/trmrkAxios";
import { WebStorage } from "./webStorage";
export interface ICacheKeyProp<T> {
    get: (data: IRefValue<T>, obj: object) => void;
    set: (data: IRefValue<T>, key: string) => void;
}
export declare class WebStorageAxios {
    webStorage: WebStorage;
    trmrkAxios: TrmrkAxios;
    constructor(webStorage: WebStorage, trmrkAxios: TrmrkAxios);
    requestMultiple<T = any, D = any>(axiosReqFunc: () => Promise<TrmrkAxiosApiResult<T, D>>, cacheKeysMap: IHash<ICacheKeyProp<T>>, storage?: Storage | boolean, refreshCache?: boolean): Promise<TrmrkAxiosApiResult<T, D>>;
    request<T = any, D = any>(axiosReqFunc: () => Promise<TrmrkAxiosApiResult<T, D>>, cacheKey: string, storage?: Storage | boolean, refreshCache?: boolean): Promise<TrmrkAxiosApiResult<T, D>>;
    getMultiple<T = any, R = AxiosResponse<T>, D = any>(url: string, cacheKeysMap: IHash<ICacheKeyProp<T>>, storage?: Storage | boolean, opts?: AxiosRequestConfig<D> | null | undefined, refreshCache?: boolean): Promise<TrmrkAxiosApiResult<T, D>>;
    get<T = any, R = AxiosResponse<T>, D = any>(url: string, cacheKey: string, storage?: Storage | boolean, opts?: AxiosRequestConfig<D> | null | undefined, refreshCache?: boolean): Promise<TrmrkAxiosApiResult<T, D>>;
}
