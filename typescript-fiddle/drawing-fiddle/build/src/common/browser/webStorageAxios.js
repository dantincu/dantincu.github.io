import { Trmrk } from "../core/core";
import { TrmrkAxiosApiResult } from "../axios/trmrkAxios";
export class WebStorageAxios {
    constructor(webStorage, trmrkAxios) {
        this.webStorage = webStorage;
        this.trmrkAxios = trmrkAxios;
    }
    async requestMultiple(axiosReqFunc, cacheKeysMap, storage = false, refreshCache = false) {
        let apiResult;
        const data = {};
        let cachedDataFound = !refreshCache;
        if (cachedDataFound) {
            for (const cacheKey of Object.keys(cacheKeysMap)) {
                const json = this.webStorage.getItem(cacheKey, storage);
                cachedDataFound = cachedDataFound && Trmrk.valIsStr(json, false, true);
                if (cachedDataFound) {
                    const dataItem = JSON.parse(json);
                    cacheKeysMap[cacheKey].get(data, dataItem);
                }
                else {
                    break;
                }
            }
        }
        if (cachedDataFound) {
            apiResult = new TrmrkAxiosApiResult({
                isSuccess: true,
                data: data.value,
            });
        }
        else {
            apiResult = await axiosReqFunc();
            if (apiResult.isSuccess) {
                data.value = apiResult.data;
                if (!cachedDataFound && !Trmrk.valIsNullOfUndefOrNaN(apiResult.data)) {
                    for (const cacheKey of Object.keys(cacheKeysMap)) {
                        cacheKeysMap[cacheKey].set(data, cacheKey);
                    }
                }
            }
        }
        return apiResult;
    }
    async request(axiosReqFunc, cacheKey, storage = false, refreshCache = false) {
        let json = null;
        let data;
        if (!refreshCache) {
            json = this.webStorage.getItem(cacheKey, storage);
            if (Trmrk.valIsStr(json, false, true)) {
                data = JSON.parse(json);
            }
        }
        let apiResult;
        let cachedDataFound = false;
        if (!Trmrk.valIsUndef(data)) {
            cachedDataFound = true;
            apiResult = new TrmrkAxiosApiResult({
                isSuccess: true,
                data: data,
            });
        }
        else {
            apiResult = await axiosReqFunc();
            if (apiResult.isSuccess) {
                if (!cachedDataFound && !Trmrk.valIsNullOfUndefOrNaN(apiResult.data)) {
                    json = JSON.stringify(apiResult.data);
                    this.webStorage.setItem(cacheKey, json, storage);
                }
            }
        }
        return apiResult;
    }
    async getMultiple(url, cacheKeysMap, storage = false, opts = null, refreshCache = false) {
        const apiResult = await this.requestMultiple(async () => await this.trmrkAxios.get(url, opts), cacheKeysMap, storage, refreshCache);
        return apiResult;
    }
    async get(url, cacheKey, storage = false, opts = null, refreshCache = false) {
        const apiResult = await this.request(async () => await this.trmrkAxios.get(url, opts), cacheKey, storage, refreshCache);
        return apiResult;
    }
}
