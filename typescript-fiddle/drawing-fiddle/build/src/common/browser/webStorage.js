import { Trmrk } from "../core/core";
export class WebStorage {
    constructor() {
        this.cacheKeyBasePrefix = Trmrk.trmrkPrefix.value;
        this.bigItems = {};
    }
    clear(storage) {
        const storageObj = this.getStorage(storage);
        storageObj.clear();
    }
    containsKey(key, storage) {
        const storageObj = this.getStorage(storage);
        const len = storageObj.length;
        let retVal = false;
        for (let i = 0; i < len; i++) {
            const candKey = storageObj.key(i);
            if (candKey === key) {
                retVal = true;
                break;
            }
        }
        return retVal;
    }
    keys(storage) {
        const storageObj = this.getStorage(storage);
        const len = storageObj.length;
        const keysArr = [];
        for (let i = 0; i < len; i++) {
            const key = storageObj.key(i);
            keysArr.push(key);
        }
        return keysArr;
    }
    getItem(key, storage) {
        const storageObj = this.getStorage(storage);
        const retVal = storageObj.getItem(key);
        return retVal;
    }
    setItem(key, value, storage) {
        const storageObj = this.getStorage(storage);
        storageObj.setItem(key, value);
    }
    removeItem(key, storage) {
        const storageObj = this.getStorage(storage);
        storageObj.removeItem(key);
    }
    removeItems(keysArr, storage) {
        const storageObj = this.getStorage(storage);
        const len = keysArr.length;
        for (let i = 0; i < len; i++) {
            const key = keysArr[i];
            storageObj.removeItem(key);
        }
    }
    getStorage(storage) {
        let storageObj;
        if (Trmrk.valIsNotNullObj(storage)) {
            storageObj = storage;
        }
        else {
            if (storage) {
                storageObj = window.localStorage;
            }
            else {
                storageObj = window.sessionStorage;
            }
        }
        return storageObj;
    }
    getCacheKey(keyName, id = null, username = null) {
        const cacheKey = [this.cacheKeyBasePrefix, username, keyName, id]
            .filter((str) => Trmrk.valIsStr(str, false, true))
            .join("|");
        return cacheKey;
    }
    textToLines(text, maxLineLen) {
        let lines = [];
        let textLen = text.length;
        let linesCount = Math.ceil(textLen / maxLineLen);
        let stIdx = 0;
        let endIdx = maxLineLen - 1;
        for (let i = 0; i < linesCount; i++) {
            lines[i] = text.substring(stIdx, endIdx);
            stIdx = endIdx;
            endIdx += maxLineLen;
        }
        return lines;
    }
    getBigItemChunksCount(key, guidStr, maxChunkLength, isPersistent) {
        let text = this.getItem(key, isPersistent);
        if (typeof (text) !== "string") {
            text = "";
        }
        let lines = this.textToLines(text, maxChunkLength);
        this.bigItems[guidStr] = lines;
        let chunksCount = lines.length;
        return chunksCount;
    }
    getBigItemChunk(guidStr, idx) {
        let textChunk = this.bigItems[guidStr][idx];
        return textChunk;
    }
    clearBigItemChunks(guidStr) {
        delete this.bigItems[guidStr];
    }
}
