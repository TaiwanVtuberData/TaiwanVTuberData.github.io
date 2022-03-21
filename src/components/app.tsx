import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { IntlProvider } from 'preact-i18n';
import { Route, Router } from 'preact-router';
import Sidebar from './Sidebar';
import baseroute from '../baseroute';
import { Dictionary } from '../i18n/Dictionary';
import en from '../i18n/en';
import zh from '../i18n/zh';
import Home from '../routes/home';
import AllVTubersPage from '../routes/AllVTubers';
import DebutVTubersPage from '../routes/DebutVTubers';
import GroupPage from '../routes/Group';
import GroupListPage from '../routes/GroupList';
import TrendingVTubersPage from '../routes/TrendingVTubers';
import NotFoundPage from '../routes/notfound';
import { validI18n } from '../types/LanguageOptions';
import GraduateVTubersPage from '../routes/GraduateVTubers';
import GrowingVTubersPage from '../routes/GrowingVTubers';
import TrendingVideosPage from '../routes/TrendingVideos';
import AboutPage from '../routes/About';

const App: FunctionalComponent = () => {
  const [locale, setLocale] = useState<validI18n>('zh');
  const [definition, setDefinition] = useState<Dictionary>(zh);

  useEffect(() => {
    if (locale === 'zh') {
      setDefinition(zh);
    } else {
      setDefinition(en);
    }
  }, [locale]);

  return (
    <div id="preact_root">
      <IntlProvider definition={definition}>
        <Sidebar
          siteUrlPrefix={baseroute}
          locale={locale}
          setLocale={setLocale}
        />
        <Router>
          <Route
            path={`${baseroute}/`}
            dictionary={definition}
            component={Home}
          />
          <Route
            path={`${baseroute}/all-vtubers`}
            dictionary={definition}
            component={AllVTubersPage}
          />
          <Route
            path={`${baseroute}/group-list`}
            dictionary={definition}
            component={GroupListPage}
          />
          <Route
            path={`${baseroute}/trending-vtubers`}
            dictionary={definition}
            component={TrendingVTubersPage}
          />
          <Route
            path={`${baseroute}/trending-videos/:modifier`}
            dictionary={definition}
            component={TrendingVideosPage}
          />
          <Route
            path={`${baseroute}/growing-vtubers`}
            dictionary={definition}
            component={GrowingVTubersPage}
          />
          <Route
            path={`${baseroute}/debut-vtubers`}
            dictionary={definition}
            component={DebutVTubersPage}
          />
          <Route
            path={`${baseroute}/graduate-vtubers`}
            dictionary={definition}
            component={GraduateVTubersPage}
          />
          <Route
            path={`${baseroute}/group/:groupName`}
            dictionary={definition}
            component={GroupPage}
          />
          <Route
            path={`${baseroute}/about`}
            dictionary={definition}
            component={AboutPage}
          />
          <NotFoundPage default />
        </Router>
      </IntlProvider>
    </div>
  );
};

export default App;
