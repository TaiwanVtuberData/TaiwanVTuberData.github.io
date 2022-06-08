import * as Api from '../services/ApiService';
import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { IntlProvider } from 'preact-i18n';
import { Route, Router } from 'preact-router';
import Sidebar from './Sidebar';
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
import { GetPlaceholderRoute, GetRoute } from '../utils/TypeSafeRouting';
import VTuberProfileModal from './VTuberProfileModal';
import LivestreamsPage from '../routes/Livestreams';

const App: FunctionalComponent = () => {
  const [locale, setLocale] = useState<validI18n>(
    getCookie('locale', validI18nArray, 'zh')
  );
  const [definition, setDefinition] = useState<Dictionary>(zh);

  const [displayNationality, setDisplayNationality] =
    useState<NationalityModifier>(
      getCookie('nationality', nationalityArray, 'all')
    );

  const [isApiBootstrapped, setIsApiBootstrapped] = useState<boolean>(false);

  const startApi = async (): Promise<void> => {
    await Api.bootstrapApi().then((bootstrapped) => {
      setIsApiBootstrapped(bootstrapped);
    });
  };

  useEffect(() => {
    setNationalityModifier(displayNationality);
    startApi();
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
        {isApiBootstrapped ? (
          <>
            <Sidebar
              locale={locale}
              setLocale={setLocale}
              nationality={displayNationality}
              setNationality={setDisplayNationality}
            />
            <ScrollToTopBottom />
            <VTuberProfileModal />
            <VideoModal />
            <Router>
              <Route
                path={GetRoute({ type: 'home' })}
                dictionary={definition}
                component={HomePage}
              />
              <Route
                path={GetRoute({ type: 'livestreams' })}
                dictionary={definition}
                component={LivestreamsPage}
              />
              <Route
                path={GetRoute({ type: 'event-calendar' })}
                dictionary={definition}
                component={EventCalendarPage}
              />
              <Route
                path={GetRoute({ type: 'all-vtubers' })}
                dictionary={definition}
                component={AllVTubersPage}
              />
              <Route
                path={GetRoute({ type: 'group-list' })}
                dictionary={definition}
                component={GroupListPage}
              />
              <Route
                path={GetRoute({ type: 'trending-vtubers' })}
                dictionary={definition}
                component={TrendingVTubersPage}
              />
              <Route
                path={GetRoute({ type: 'growing-vtubers' })}
                dictionary={definition}
                component={GrowingVTubersPage}
              />
              <Route
                path={GetRoute({ type: 'debut-vtubers' })}
                dictionary={definition}
                component={DebutVTubersPage}
              />
              <Route
                path={GetRoute({ type: 'graduate-vtubers' })}
                dictionary={definition}
                component={GraduateVTubersPage}
              />
              <Route
                path={GetRoute({ type: 'report-issue' })}
                dictionary={definition}
                component={ReportIssuePage}
              />
              <Route
                path={GetRoute({ type: 'about' })}
                dictionary={definition}
                component={AboutPage}
              />
              <Route
                path={GetPlaceholderRoute({ type: 'vtuber' }, ':id')}
                dictionary={definition}
                component={VTuberPage}
              />
              <Route
                path={GetPlaceholderRoute({ type: 'group' }, ':groupName')}
                dictionary={definition}
                component={GroupPage}
              />
              <Route
                path={GetPlaceholderRoute(
                  { type: 'trending-videos' },
                  ':modifier'
                )}
                dictionary={definition}
                component={TrendingVideosPage}
              />
              <Route
                path={GetPlaceholderRoute(
                  { type: 'vtubers-view-count' },
                  ':modifier'
                )}
                dictionary={definition}
                component={VTubersViewCountPage}
              />
              <NotFoundPage default />
            </Router>
          </>
        ) : (
          <span>Loading...</span>
        )}
      </IntlProvider>
    </div>
  );
};

export default App;
