export interface IRefValue<TValue = any> {
    value: TValue | null | undefined;
}
export interface IKeyValuePair<TKey, TValue = any> extends IRefValue<TValue> {
    key: TKey;
}
export declare type StrHashKeyType<TValue = any> = {
    [key: string]: TValue;
};
export declare type NumHashKeyType<TValue = any> = {
    [key: number]: TValue;
};
export declare type HashKeyType<TValue = any> = StrHashKeyType<TValue> | NumHashKeyType<TValue>;
export interface IHash<TValue> {
    [key: string]: TValue;
}
export interface IStrHash extends IHash<string> {
}
export declare abstract class ValueNormalizerCoreBase<TVal extends any | null | undefined> {
    val: TVal;
    constructor(val: TVal);
    abstract getDefaultValue(): TVal;
    abstract useDefaultValue(val: TVal): boolean;
    getNormalizedValue(): TVal;
}
export declare abstract class ValueNormalizerBase<TVal extends any | null | undefined> extends ValueNormalizerCoreBase<TVal> {
    dfVal: TVal;
    constructor(val: TVal, dfVal: TVal);
    getDefaultValue(): TVal;
}
export declare abstract class ValueFactoryNormalizerBase<TVal extends any | null | undefined> extends ValueNormalizerCoreBase<TVal> {
    dfValFactory: () => TVal;
    constructor(val: TVal, dfValFactory: () => TVal);
    getDefaultValue(): TVal;
}
export declare class ObjValueNormalizer<TObj extends object | null | undefined> extends ValueNormalizerBase<TObj> {
    constructor(val: TObj, dfVal: TObj);
    useDefaultValue(val: TObj): boolean;
}
export declare class ObjValueFactoryNormalizer<TObj extends object | null | undefined> extends ValueFactoryNormalizerBase<TObj> {
    constructor(val: TObj, dfValFactory: () => TObj);
    useDefaultValue(val: TObj): boolean;
}
export declare class NumValueNormalizer extends ValueNormalizerBase<Number | null | undefined> {
    constructor(val: Number | null | undefined, dfVal: Number | null | undefined);
    useDefaultValue(val: Number | null | undefined): boolean;
}
export declare class NumValueFactoryNormalizer extends ValueFactoryNormalizerBase<Number | null | undefined> {
    constructor(val: Number | null | undefined, dfValFactory: () => Number | null | undefined);
    useDefaultValue(val: Number | null | undefined): boolean;
}
export declare class StrValueNormalizer extends ValueNormalizerBase<string | null | undefined> {
    allowEmpty: boolean;
    trimFirst: boolean;
    constructor(val: string | null | undefined, dfVal: string | null | undefined, allowEmpty?: boolean, trimFirst?: boolean);
    useDefaultValue(val: string | null | undefined): boolean;
}
export declare class StrValueFactoryNormalizer extends ValueFactoryNormalizerBase<string | null | undefined> {
    allowEmpty: boolean;
    trimFirst: boolean;
    constructor(val: string | null | undefined, dfValFactory: () => string | null | undefined, allowEmpty?: boolean, trimFirst?: boolean);
    useDefaultValue(val: string | null | undefined): boolean;
}
export declare namespace Trmrk {
    const dblSpace = "  ";
    const dblBackSlash = "\\\\";
    const quoteChars: IStrHash;
    const javascriptVoid = "javascript:void(0);";
    const trmrkPrefix: IRefValue<string>;
    const invalidFilePathChars = "\\/:*?\"<>|";
    var app: any;
    var setApp: Function;
    const valIs: (val: any | null | undefined, predicate: (value: any | null | undefined, valueType: string) => boolean) => boolean;
    const valIsUndef: (val: any | null | undefined) => boolean;
    const valIsOfTypeObject: (val: any | null | undefined) => boolean;
    const valIsOfTypeFunc: (val: any | null | undefined) => boolean;
    const valIsOfTypeBoolean: (val: any | null | undefined) => boolean;
    const valIsOfTypeNumber: (val: any | null | undefined) => boolean;
    const valIsOfTypeString: (val: any | null | undefined) => boolean;
    const valIsOfTypeBigInt: (val: any | null | undefined) => boolean;
    const valIsOfTypeSymbol: (val: any | null | undefined) => boolean;
    const valIsNullOfUndef: (val: any | null | undefined) => boolean;
    const valIsNullOfUndefOrNaN: (value: any | null | undefined) => boolean;
    const valIsNotNullObj: (val: any | null | undefined) => boolean;
    const valIsNaNNumber: (val: any | null | undefined) => boolean;
    const valIsNotNaNNumber: (val: any | null | undefined) => boolean;
    const valIsStr: (val: any | null | undefined, allowEmpty?: boolean, trimFirst?: boolean) => boolean;
    const withVal: <TVal extends unknown, TRetVal extends unknown>(value: TVal, callback: (val: TVal) => TRetVal) => TRetVal;
    const escapeQuote: (strVal: string, qStr?: '"' | "'") => string;
    const escapeHtml: (strVal: string) => string;
    const firstLetterToLowerCase: (strVal: string) => string;
    const firstLetterToUpperCase: (strVal: string) => string;
    const numberIs: (value: number | any | null | undefined, callback: (val: number) => boolean, defaultValue?: boolean) => boolean;
    const numbersAre: (trgValue: number | any | null | undefined, srcValue: number | any | null | undefined, callback: (trgVal: number, srcVal: number) => boolean) => boolean;
    const numberIsGreaterThan: (trgValue: number | any | null | undefined, srcValue: number | any | null | undefined, strictlyGreatherThan?: boolean) => boolean;
    const numberIsLessThan: (trgValue: number | any | null | undefined, srcValue: number | any | null | undefined, strictlyLessThan?: boolean) => boolean;
    const numberIsInRange: (value: number | any | null | undefined, min?: number | null, max?: number | null, strictlyGreatherThan?: boolean, strictlyLessThan?: boolean) => boolean;
    const throwErr: (err: any) => never;
    const isIterable: (obj: any) => boolean;
    const readFromClipboardAsync: () => Promise<string>;
    const writeToClipboardAsync: (text: string) => Promise<void>;
    const getObjOrParseJsonIfStr: <T>(value: T) => T;
}
