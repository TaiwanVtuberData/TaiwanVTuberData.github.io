import { FunctionalComponent, h } from 'preact';
import { Router } from 'preact-router';
import createHashHistory from 'history/createHashHistory';
import Home from '../routes/home';
import AllVTubersPage from '../routes/AllVTubers';
import NotFoundPage from '../routes/notfound';
import Header from './header';

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Header />
      <Router history={createHashHistory()}>
        <Home path="/" />
        <AllVTubersPage path="/all-vtubers" />
        <NotFoundPage default />
      </Router>
    </div>
  );
};

export default App;
