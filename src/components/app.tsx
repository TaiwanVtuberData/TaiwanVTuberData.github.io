import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { IntlProvider } from 'preact-i18n';
import { Route, Router } from 'preact-router';
import Sidebar from './Sidebar';
import baseroute from '../baseroute';
import { Dictionary } from '../i18n/Dictionary';
import en from '../i18n/en';
import zh from '../i18n/zh';
import HomePage from '../routes/home';
import AllVTubersPage from '../routes/AllVTubers';
import DebutVTubersPage from '../routes/DebutVTubers';
import GroupPage from '../routes/Group';
import GroupListPage from '../routes/GroupList';
import TrendingVTubersPage from '../routes/TrendingVTubers';
import NotFoundPage from '../routes/notfound';
import { validI18n, validI18nArray } from '../types/LanguageOptions';
import GraduateVTubersPage from '../routes/GraduateVTubers';
import GrowingVTubersPage from '../routes/GrowingVTubers';
import TrendingVideosPage from '../routes/TrendingVideos';
import AboutPage from '../routes/About';
import EventCalendarPage from '../routes/EventCalendar';
import ReportIssuePage from '../routes/ReportIssue';
import ScrollToTopBottom from './ScrollToTopBottom';
import VideoModal from './VideoModal';
import VTubersViewCountPage from '../routes/VTubersViewCount';
import {
  nationalityArray,
  NationalityModifier,
} from '../types/Common/NationalityModifier';
import {
  getNationalityModifierState,
  setNationalityModifier,
} from '../global/DisplayNationality';
import { getCookie, setCookie } from '../utils/CookieUtils';
import VTuberPage from '../routes/VTuber';

const App: FunctionalComponent = () => {
  const [locale, setLocale] = useState<validI18n>(
    getCookie('locale', validI18nArray, 'zh')
  );
  const [definition, setDefinition] = useState<Dictionary>(zh);

  const [displayNationality, setDisplayNationality] =
    useState<NationalityModifier>(
      getCookie('nationality', nationalityArray, 'all')
    );

  useEffect(() => {
    setNationalityModifier(displayNationality);
  }, []);

  useEffect(() => {
    if (locale === 'zh') {
      setDefinition(zh);
    } else {
      setDefinition(en);
    }

    setCookie('locale', validI18nArray, locale);
  }, [locale]);

  useEffect(() => {
    const prevNationalityModifier: NationalityModifier =
      getNationalityModifierState();

    // only reload page on value changed
    if (displayNationality !== prevNationalityModifier) {
      setNationalityModifier(displayNationality);
      setCookie('nationality', nationalityArray, displayNationality);
      window.location.reload();
    }
  }, [displayNationality]);

  return (
    <div id="preact_root">
      <IntlProvider definition={definition}>
        <Sidebar
          siteUrlPrefix={baseroute}
          locale={locale}
          setLocale={setLocale}
          nationality={displayNationality}
          setNationality={setDisplayNationality}
        />
        <ScrollToTopBottom />
        <VideoModal />
        <Router>
          <Route
            path={`${baseroute}/`}
            dictionary={definition}
            component={HomePage}
          />
          <Route
            path={`${baseroute}/event-calendar`}
            dictionary={definition}
            component={EventCalendarPage}
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
            path={`${baseroute}/vtubers-view-count/:modifier`}
            dictionary={definition}
            component={VTubersViewCountPage}
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
            path={`${baseroute}/vtuber/:id`}
            dictionary={definition}
            component={VTuberPage}
          />
          <Route
            path={`${baseroute}/group/:groupName`}
            dictionary={definition}
            component={GroupPage}
          />
          <Route
            path={`${baseroute}/report-issue`}
            dictionary={definition}
            component={ReportIssuePage}
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
