import { Axios, AxiosRequestConfig, AxiosResponse } from "axios";
export declare class TrmrkAxiosApiResult<T = any, D = any> {
    constructor(src?: any | null | undefined);
    isSuccess: boolean | null;
    exc: object | string | null;
    data: T | null;
    status: number | string | null;
    statusText: string | null;
    headers: object | null;
    config: AxiosRequestConfig<D> | null;
    request: object | null;
    getStatusStr(defaultValue?: string): string | undefined;
    getStatusText(defaultValue?: string): string | undefined;
}
export declare class TrmrkAxios {
    axios: Axios;
    constructor(axios: Axios);
    request<T = any, R = AxiosResponse<T>, D = any>(requestFunc: () => Promise<R>): Promise<TrmrkAxiosApiResult<T, D>>;
    get<T = any, R = AxiosResponse<T>, D = any>(url: string, opts?: AxiosRequestConfig<D> | undefined): Promise<TrmrkAxiosApiResult<T, D>>;
    put<T = any, R = AxiosResponse<T>, D = any>(url: string, params: any, opts?: AxiosRequestConfig<D> | undefined): Promise<TrmrkAxiosApiResult<T, D>>;
    post<T = any, R = AxiosResponse<T>, D = any>(url: string, params: any, opts?: AxiosRequestConfig<D> | undefined): Promise<TrmrkAxiosApiResult<T, D>>;
    delete<T = any, R = AxiosResponse<T>, D = any>(url: string, opts?: AxiosRequestConfig<D> | undefined): Promise<TrmrkAxiosApiResult<T, D>>;
    setApiResultSuccessFlag<T = any, D = any>(apiResult: TrmrkAxiosApiResult<T, D>): void;
}
