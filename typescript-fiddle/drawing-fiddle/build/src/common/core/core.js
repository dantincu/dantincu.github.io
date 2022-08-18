export class ValueNormalizerCoreBase {
    constructor(val) {
        this.val = val;
    }
    getNormalizedValue() {
        let retVal = this.val;
        if (this.useDefaultValue(this.val)) {
            retVal = this.getDefaultValue();
        }
        return retVal;
    }
}
export class ValueNormalizerBase extends ValueNormalizerCoreBase {
    constructor(val, dfVal) {
        super(val);
        this.dfVal = dfVal;
    }
    getDefaultValue() {
        return this.dfVal;
    }
}
export class ValueFactoryNormalizerBase extends ValueNormalizerCoreBase {
    constructor(val, dfValFactory) {
        super(val);
        this.dfValFactory = dfValFactory;
    }
    getDefaultValue() {
        const dfVal = this.dfValFactory();
        return dfVal;
    }
}
export class ObjValueNormalizer extends ValueNormalizerBase {
    constructor(val, dfVal) {
        super(val, dfVal);
    }
    useDefaultValue(val) {
        const retVal = !Trmrk.valIsNotNullObj(val);
        return retVal;
    }
}
export class ObjValueFactoryNormalizer extends ValueFactoryNormalizerBase {
    constructor(val, dfValFactory) {
        super(val, dfValFactory);
    }
    useDefaultValue(val) {
        const retVal = !Trmrk.valIsNotNullObj(val);
        return retVal;
    }
}
export class NumValueNormalizer extends ValueNormalizerBase {
    constructor(val, dfVal) {
        super(val, dfVal);
    }
    useDefaultValue(val) {
        const retVal = !Trmrk.valIsNotNaNNumber(val);
        return retVal;
    }
}
export class NumValueFactoryNormalizer extends ValueFactoryNormalizerBase {
    constructor(val, dfValFactory) {
        super(val, dfValFactory);
    }
    useDefaultValue(val) {
        const retVal = !Trmrk.valIsNotNaNNumber(val);
        return retVal;
    }
}
export class StrValueNormalizer extends ValueNormalizerBase {
    constructor(val, dfVal, allowEmpty = true, trimFirst = false) {
        super(val, dfVal);
        this.allowEmpty = allowEmpty;
        this.trimFirst = trimFirst;
    }
    useDefaultValue(val) {
        const retVal = !Trmrk.valIsStr(val, this.allowEmpty, this.trimFirst);
        return retVal;
    }
}
export class StrValueFactoryNormalizer extends ValueFactoryNormalizerBase {
    constructor(val, dfValFactory, allowEmpty = true, trimFirst = false) {
        super(val, dfValFactory);
        this.allowEmpty = allowEmpty;
        this.trimFirst = trimFirst;
    }
    useDefaultValue(val) {
        const retVal = !Trmrk.valIsStr(val, this.allowEmpty, this.trimFirst);
        return retVal;
    }
}
export var Trmrk;
(function (Trmrk) {
    Trmrk.dblSpace = "  ";
    Trmrk.dblBackSlash = "\\\\";
    Trmrk.quoteChars = Object.freeze({
        '"': '\\"',
        "'": "\\'",
    });
    Trmrk.javascriptVoid = "javascript:void(0);";
    Trmrk.trmrkPrefix = {
        value: "trmrk",
    };
    Trmrk.invalidFilePathChars = '\\/:*?"<>|';
    Trmrk.app = {};
    Trmrk.valIs = (val, predicate) => {
        const retVal = predicate(val, typeof val);
        return retVal;
    };
    Trmrk.valIsUndef = (val) => typeof val === "undefined";
    Trmrk.valIsOfTypeObject = (val) => typeof val === "object";
    Trmrk.valIsOfTypeFunc = (val) => typeof val === "function";
    Trmrk.valIsOfTypeBoolean = (val) => typeof val === "boolean";
    Trmrk.valIsOfTypeNumber = (val) => typeof val === "number";
    Trmrk.valIsOfTypeString = (val) => typeof val === "string";
    Trmrk.valIsOfTypeBigInt = (val) => typeof val === "bigint";
    Trmrk.valIsOfTypeSymbol = (val) => typeof val === "symbol";
    Trmrk.valIsNullOfUndef = (val) => val === null || typeof val === "undefined";
    Trmrk.valIsNullOfUndefOrNaN = (value) => value === null ||
        Trmrk.valIs(value, (val, type) => type === "undefined" || (type === "number" && isNaN(val)));
    Trmrk.valIsNotNullObj = (val) => val !== null && Trmrk.valIsOfTypeObject(val);
    Trmrk.valIsNaNNumber = (val) => typeof val === "number" && isNaN(val);
    Trmrk.valIsNotNaNNumber = (val) => typeof val === "number" && !isNaN(val);
    Trmrk.valIsStr = (val, allowEmpty = true, trimFirst = false) => {
        let retVal = typeof val === "string";
        if (retVal && !allowEmpty) {
            if (trimFirst) {
                val = val.trim();
            }
            retVal = val !== "";
        }
        return retVal;
    };
    Trmrk.withVal = (value, callback) => {
        const retVal = callback(value);
        return retVal;
    };
    Trmrk.escapeQuote = (strVal, qStr = '"') => {
        strVal = strVal.replaceAll("\\", Trmrk.dblBackSlash);
        const replQ = Trmrk.quoteChars[qStr];
        strVal = strVal.replaceAll(qStr, replQ);
        return strVal;
    };
    Trmrk.escapeHtml = (strVal) => {
        strVal = strVal
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
        return strVal;
    };
    Trmrk.firstLetterToLowerCase = (strVal) => {
        strVal = strVal[0].toLowerCase() + strVal.substring(1);
        return strVal;
    };
    Trmrk.firstLetterToUpperCase = (strVal) => {
        strVal = strVal[0].toUpperCase() + strVal.substring(1);
        return strVal;
    };
    Trmrk.numberIs = (value, callback, defaultValue = false) => {
        let retVal = defaultValue;
        if (Trmrk.valIsNotNaNNumber(value)) {
            retVal = callback(value);
        }
        return retVal;
    };
    Trmrk.numbersAre = (trgValue, srcValue, callback) => {
        const retValue = Trmrk.numberIs(trgValue, (trgVal) => Trmrk.numberIs(srcValue, (srcVal) => callback(trgVal, srcVal), true));
        return retValue;
    };
    Trmrk.numberIsGreaterThan = (trgValue, srcValue, strictlyGreatherThan = false) => {
        const retValue = Trmrk.numbersAre(trgValue, srcValue, (trgVal, srcVal) => {
            let retVal;
            if (strictlyGreatherThan) {
                retVal = trgVal > srcVal;
            }
            else {
                retVal = trgVal >= srcVal;
            }
            return retVal;
        });
        return retValue;
    };
    Trmrk.numberIsLessThan = (trgValue, srcValue, strictlyLessThan = false) => {
        const retValue = Trmrk.numbersAre(trgValue, srcValue, (trgVal, srcVal) => {
            let retVal;
            if (strictlyLessThan) {
                retVal = trgVal < srcVal;
            }
            else {
                retVal = trgVal <= srcVal;
            }
            return retVal;
        });
        return retValue;
    };
    Trmrk.numberIsInRange = (value, min = null, max = null, strictlyGreatherThan = false, strictlyLessThan = false) => {
        let retVal = Trmrk.numberIsGreaterThan(value, min, strictlyGreatherThan);
        retVal = retVal && Trmrk.numberIsLessThan(value, min, strictlyLessThan);
        return retVal;
    };
    Trmrk.throwErr = (err) => {
        if (typeof err !== "object") {
            err = new Error(err);
        }
        throw err;
    };
    Trmrk.isIterable = (obj) => {
        const retVal = typeof obj[Symbol.iterator] === "function";
        return retVal;
    };
    Trmrk.readFromClipboardAsync = async () => {
        const text = await navigator.clipboard.readText();
        return text;
    };
    Trmrk.writeToClipboardAsync = async (text) => {
        await navigator.clipboard.writeText(text);
    };
    Trmrk.getObjOrParseJsonIfStr = (value) => {
        let retVal = value;
        if (Trmrk.valIsStr(value, false, true)) {
            try {
                retVal = JSON.parse(value);
                // eslint-disable-next-line no-empty
            }
            catch (err) { }
        }
        return retVal;
    };
})(Trmrk || (Trmrk = {}));
