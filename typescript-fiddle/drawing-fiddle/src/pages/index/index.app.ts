import { Trmrk } from '../../common/core/core';
import { TrmrkClientBrowser } from '../../common/browser/browser.app';
import { TrmrkBootStrap } from '../../common/browser/bootstrap/bootstrap.app';
import { TrmrkApp } from '../../app/app';

export class IndexPageApp extends TrmrkApp {
    constructor(bsBrowser: TrmrkBootStrap, browser: TrmrkClientBrowser) {
      super(bsBrowser, browser);
    }

    init() {
        console.log("IndexPageApp");
    }
}