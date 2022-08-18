import { TrmrkClientBrowser } from "../browser.app";
import { TrmrkBootStrap, TrmrkBootstrapApp } from './bootstrap.app';
export const getTrmrkBootstrapApp = () => {
    const clientBrowser = new TrmrkClientBrowser();
    const app = new TrmrkBootstrapApp(new TrmrkBootStrap(clientBrowser), clientBrowser);
    return app;
};
