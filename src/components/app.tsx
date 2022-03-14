import { FunctionalComponent, h } from 'preact';
import { Router } from 'preact-router';
import Header from './header';
import Home from '../routes/home';
import AllVTubersPage from '../routes/AllVTubers';
import NotFoundPage from '../routes/notfound';
import baseroute from '../baseroute';

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Header siteUrlPrefix={baseroute} />
      <Router>
        <Home path={`${baseroute}/`} />
        <AllVTubersPage path={`${baseroute}/all-vtubers`} />
        <NotFoundPage default />
      </Router>
    </div>
  );
};

export default App;
