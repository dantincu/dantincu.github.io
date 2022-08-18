import { TrmrkClientBrowser, TrmrkClientBrowserApp } from "../browser.app";
export declare class TrmrkBootStrap {
    browser: TrmrkClientBrowser;
    constructor(browser: TrmrkClientBrowser);
}
export declare class TrmrkBootstrapApp extends TrmrkClientBrowserApp {
    bsBrowser: TrmrkBootStrap;
    constructor(bsBrowser: TrmrkBootStrap, browser: TrmrkClientBrowser);
}
