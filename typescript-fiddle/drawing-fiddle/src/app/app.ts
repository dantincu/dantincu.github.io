import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { TrmrkClientBrowser } from '../common/browser/browser.app';
import { TrmrkBootStrap, TrmrkBootstrapApp } from '../common/browser/bootstrap/bootstrap.app';

export abstract class TrmrkApp extends TrmrkBootstrapApp {
    constructor(bsBrowser: TrmrkBootStrap, browser: TrmrkClientBrowser) {
      super(bsBrowser, browser);
    }
}