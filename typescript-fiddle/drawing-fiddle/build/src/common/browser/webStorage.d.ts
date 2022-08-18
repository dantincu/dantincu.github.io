import { IHash } from "../core/core";
export declare class WebStorage {
    cacheKeyBasePrefix: string;
    bigItems: IHash<string[]>;
    clear(storage: Storage | boolean): void;
    containsKey(key: string, storage: Storage | boolean): boolean;
    keys(storage: Storage | boolean): string[];
    getItem(key: string, storage: Storage | boolean): string | null;
    setItem(key: string, value: string, storage: Storage | boolean): void;
    removeItem(key: string, storage: Storage | boolean): void;
    removeItems(keysArr: string[], storage: Storage | boolean): void;
    getStorage(storage: Storage | boolean): Storage;
    getCacheKey(keyName: string, id?: string | string | null, username?: string | null): string;
    textToLines(text: string, maxLineLen: number): string[];
    getBigItemChunksCount(key: string, guidStr: string, maxChunkLength: number, isPersistent: boolean | Storage): number;
    getBigItemChunk(guidStr: string, idx: number): string;
    clearBigItemChunks(guidStr: string): void;
}
