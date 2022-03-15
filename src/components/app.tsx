import { FunctionalComponent, h } from 'preact';
import { IntlProvider } from 'preact-i18n';
import { Router } from 'preact-router';
import Header from './header';
import Home from '../routes/home';
import AllVTubersPage from '../routes/AllVTubers';
import NotFoundPage from '../routes/notfound';
import baseroute from '../baseroute';

import en from '../i18n/en';
import zh from '../i18n/zh';

const App: FunctionalComponent = () => {
  const definition = zh;

  return (
    <div id="preact_root">
      <IntlProvider definition={definition}>
        <Header siteUrlPrefix={baseroute} />
        <Router>
          <Home path={`${baseroute}/`} />
          <AllVTubersPage path={`${baseroute}/all-vtubers`} />
          <NotFoundPage default />
        </Router>
      </IntlProvider>
    </div>
  );
};

export default App;
