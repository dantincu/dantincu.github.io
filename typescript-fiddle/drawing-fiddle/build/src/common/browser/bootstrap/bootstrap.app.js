import { TrmrkClientBrowserApp } from "../browser.app";
export class TrmrkBootStrap {
    constructor(browser) {
        this.browser = browser;
    }
}
export class TrmrkBootstrapApp extends TrmrkClientBrowserApp {
    constructor(bsBrowser, browser) {
        super(browser);
        this.bsBrowser = bsBrowser;
    }
}
