import { FunctionalComponent, h } from 'preact';
import { Router } from 'preact-router';
import createHashHistory from 'history/createHashHistory';
import Home from '../routes/home';
import AllVTubersPage from '../routes/AllVTubers';
import NotFoundPage from '../routes/notfound';
import Header from './header';

const App: FunctionalComponent = () => {
  const RouterElement = (): h.JSX.Element | undefined => {
    if (typeof window !== 'undefined') {
      return (
        <Router history={createHashHistory()}>
          <Home path="/" />
          <AllVTubersPage path="/all-vtubers" />
          <NotFoundPage default />
        </Router>
      );
    }
  };

  return (
    <div id="preact_root">
      <Header />
      {RouterElement()}
    </div>
  );
};

export default App;
