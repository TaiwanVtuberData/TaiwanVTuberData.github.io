import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import AllVTubersPage from '../routes/AllVTubers';
import NotFoundPage from '../routes/notfound';
import Header from './header';

const App: FunctionalComponent = () => {
  // use default URL prefix (no prefix) if in development
  const SITE_URL_PREFIX: string =
    process.env.NODE_ENV === 'production' ? '/TaiwanVtuberData-Preact' : '';

  return (
    <div id="preact_root">
      <Header siteUrlPrefix={SITE_URL_PREFIX} />
      <Router>
        <Route path={`${SITE_URL_PREFIX}/`} component={Home} />
        <Route
          path={`${SITE_URL_PREFIX}/all-vtubers`}
          component={AllVTubersPage}
        />
        <NotFoundPage default />
      </Router>
    </div>
  );
};

export default App;
