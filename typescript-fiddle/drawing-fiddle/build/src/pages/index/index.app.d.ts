import { TrmrkClientBrowser } from '../../common/browser/browser.app';
import { TrmrkBootStrap } from '../../common/browser/bootstrap/bootstrap.app';
import { TrmrkApp } from '../../app/app';
export declare class IndexPageApp extends TrmrkApp {
    constructor(bsBrowser: TrmrkBootStrap, browser: TrmrkClientBrowser);
    init(): void;
}
