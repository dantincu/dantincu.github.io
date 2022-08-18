import { Trmrk } from "../core/core";
export class TrmrkAxiosApiResult {
    constructor(src = null) {
        this.isSuccess = null;
        this.exc = null;
        this.data = null;
        this.status = null;
        this.statusText = null;
        this.headers = null;
        this.config = null;
        this.request = null;
        if (src) {
            this.isSuccess = src.isSuccess ?? src.status == 200; // Did NOT use strict comparison as I DO want it to be valid when the status is "200" as a string
            this.exc = src.exc ?? null;
            this.data = Trmrk.getObjOrParseJsonIfStr(src.data);
            this.status = src.status ?? null;
            this.statusText = src.statusText ?? null;
            this.headers = src.headers ?? null;
            this.config = src.config ?? null;
            this.request = src.request ?? null;
        }
    }
    getStatusStr(defaultValue = "Error") {
        let statusStr;
        if (Trmrk.valIsOfTypeString(this.status) ||
            Trmrk.valIsNotNaNNumber(this.status)) {
            statusStr = this.status?.toString();
        }
        else {
            statusStr = defaultValue;
        }
        return statusStr;
    }
    getStatusText(defaultValue = "Error") {
        const statusText = this.statusText ?? this.getStatusStr(defaultValue);
        return statusText;
    }
}
export class TrmrkAxios {
    constructor(axios) {
        this.axios = axios;
        axios.defaults = {
            headers: {
                get: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
                post: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
                put: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
                delete: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
            },
        };
    }
    async request(requestFunc) {
        let apiResult = null;
        const axiosApiResult = await requestFunc().catch((exc) => {
            apiResult = new TrmrkAxiosApiResult({
                isSuccess: false,
                exc: exc,
                status: 500,
                statusText: "Unknown error",
            });
            return null;
        });
        if (!apiResult && axiosApiResult) {
            apiResult = new TrmrkAxiosApiResult(axiosApiResult);
        }
        return apiResult;
    }
    async get(url, opts = undefined) {
        const apiResult = await this.request(async () => {
            return await this.axios.get(url, opts ?? {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
            });
        });
        return apiResult;
    }
    async put(url, params, opts = undefined) {
        const apiResult = await this.request(async () => await this.axios.put(url, params, opts ?? {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        }));
        return apiResult;
    }
    async post(url, params, opts = undefined) {
        const apiResult = await this.request(async () => await this.axios.post(url, params, opts ?? {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        }));
        return apiResult;
    }
    async delete(url, opts = undefined) {
        const apiResult = await this.request(async () => {
            return await this.axios.delete(url, opts ?? {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
            });
        });
        return apiResult;
    }
    setApiResultSuccessFlag(apiResult) {
        if (apiResult.status === 200) {
            apiResult.isSuccess = true;
        }
        else {
            apiResult.isSuccess = false;
        }
    }
}
