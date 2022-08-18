import { Trmrk, IHash } from "../core/core";

export class WebStorage {
  cacheKeyBasePrefix = Trmrk.trmrkPrefix.value as string;
  bigItems: IHash<string[]> = {};

  clear(storage: Storage | boolean) {
    const storageObj = this.getStorage(storage);
    storageObj.clear();
  }

  containsKey(key: string, storage: Storage | boolean) {
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

  keys(storage: Storage | boolean) {
    const storageObj = this.getStorage(storage);

    const len = storageObj.length;
    const keysArr: string[] = [];

    for (let i = 0; i < len; i++) {
      const key = storageObj.key(i) as string;
      keysArr.push(key);
    }

    return keysArr;
  }

  getItem(key: string, storage: Storage | boolean) {
    const storageObj = this.getStorage(storage);
    const retVal = storageObj.getItem(key);

    return retVal;
  }

  setItem(key: string, value: string, storage: Storage | boolean) {
    const storageObj = this.getStorage(storage);
    storageObj.setItem(key, value);
  }

  removeItem(key: string, storage: Storage | boolean) {
    const storageObj = this.getStorage(storage);
    storageObj.removeItem(key);
  }

  removeItems(keysArr: string[], storage: Storage | boolean) {
    const storageObj = this.getStorage(storage);
    const len = keysArr.length;

    for (let i = 0; i < len; i++) {
      const key = keysArr[i];
      storageObj.removeItem(key);
    }
  }

  getStorage(storage: Storage | boolean): Storage {
    let storageObj: Storage;

    if (Trmrk.valIsNotNullObj(storage)) {
      storageObj = storage as Storage;
    } else {
      if (storage) {
        storageObj = window.localStorage;
      } else {
        storageObj = window.sessionStorage;
      }
    }

    return storageObj;
  }

  getCacheKey(
    keyName: string,
    id: string | string | null = null,
    username: string | null = null
  ) {
    const cacheKey = [this.cacheKeyBasePrefix, username, keyName, id]
      .filter((str) => Trmrk.valIsStr(str, false, true))
      .join("|");

    return cacheKey;
  }

  textToLines (text: string, maxLineLen: number) {
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

  getBigItemChunksCount(key: string, guidStr: string, maxChunkLength: number, isPersistent: boolean | Storage) {
      let text = this.getItem(key, isPersistent);

      if (typeof (text) !== "string") {
          text = "";
      }

      let lines = this.textToLines(text, maxChunkLength);
      this.bigItems[guidStr] = lines;

      let chunksCount = lines.length;
      return chunksCount;
  }

  getBigItemChunk(guidStr: string, idx: number) {
      let textChunk = this.bigItems[guidStr][idx];
      return textChunk;
  }

  clearBigItemChunks(guidStr: string) {
      delete this.bigItems[guidStr];
  }
}
