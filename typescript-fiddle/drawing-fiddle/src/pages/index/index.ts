import { Trmrk } from '../../common/core/core';
import { TrmrkClientBrowser } from '../../common/browser/browser.app';
import { TrmrkBootStrap } from '../../common/browser/bootstrap/bootstrap.app';
import { TrmrkApp } from '../../app/app';
import { IndexPageApp } from './index.app';

const getIndexPageApp = () => {
  const clientBrowser = new TrmrkClientBrowser();

  const app = new IndexPageApp(
    new TrmrkBootStrap(clientBrowser),
    clientBrowser
  );

  return app;
}

Trmrk.app = getIndexPageApp();
(window as any).Trmrk = Trmrk;