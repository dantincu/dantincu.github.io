import { TrmrkApp } from '../../app/app';
export class IndexPageApp extends TrmrkApp {
    constructor(bsBrowser, browser) {
        super(bsBrowser, browser);
    }
    init() {
        console.log("IndexPageApp");
    }
}
