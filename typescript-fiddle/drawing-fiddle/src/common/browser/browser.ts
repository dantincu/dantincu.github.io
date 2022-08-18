import { TrmrkClientBrowser, TrmrkClientBrowserApp } from './browser.app';

export const getTrmrkClientBrowserApp = () => {
  const app = new TrmrkClientBrowserApp(
    new TrmrkClientBrowser()
  );

return app;
}