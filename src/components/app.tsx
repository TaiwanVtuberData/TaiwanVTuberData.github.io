import {
  getNationalityModifierState,
  setNationalityModifier,
} from '../global/DisplayNationality';
import { setCurrentLocale } from '../global/Locale';
import { Dictionary } from '../i18n/Dictionary';
import en from '../i18n/en';
import zh from '../i18n/zh';
import AboutPage from '../routes/About';
import AllVTubersPage from '../routes/AllVTubers';
import AnniversaryVTubersPage from '../routes/AnniversaryVTubers';
import DebutVTubersPage from '../routes/DebutVTubers';
import EventCalendarPage from '../routes/EventCalendar';
import GraduateVTubersPage from '../routes/GraduateVTubers';
import GroupPage from '../routes/Group';
import GroupListPage from '../routes/GroupList';
import GrowingVTubersPage from '../routes/GrowingVTubers';
import LivestreamsPage from '../routes/Livestreams';
import Redirect from '../routes/Redirect';
import ReportIssuePage from '../routes/ReportIssue';
import TrendingVTubersPage from '../routes/TrendingVTubers';
import TrendingVideosPage from '../routes/TrendingVideos';
import VTuberPage from '../routes/VTuber';
import VTubersViewCountPage from '../routes/VTubersViewCount';
import YearEndStatistic from '../routes/YearEndStatistic';
import HomePage from '../routes/home';
import * as Api from '../services/ApiService';
import * as ApiSourceService from '../services/ApiSourceService';
import { ApiSourceOption } from '../types/ApiSourceOptions';
import {
  nationalityArray,
  NationalityModifier,
} from '../types/Common/NationalityModifier';
import { validI18n, validI18nArray } from '../types/LanguageOptions';
import { getCookie, setCookie } from '../utils/CookieUtils';
import { GetPlaceholderRoute, GetRoute } from '../utils/TypeSafeRouting';
import ReloadPrompt from './ReloadModal';
import ScrollToTopBottom from './ScrollToTopBottom';
import Sidebar from './Sidebar';
import VTuberProfileModal from './VTuberProfileModal';
import VideoModal from './VideoModal';
import { IntlProvider } from 'preact-i18n';
import { Route, Router } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';

export function App() {
  const [locale, setLocale] = useState<validI18n>(
    getCookie('locale', validI18nArray, 'zh'),
  );
  const [definition, setDefinition] = useState<Dictionary>(zh);

  const [displayNationality, setDisplayNationality] =
    useState<NationalityModifier>(
      getCookie('nationality', nationalityArray, 'all'),
    );

  const [apiSource, setApiSource] = useState<ApiSourceOption>(
    ApiSourceService.getApiSourceOption(),
  );
  function setApiSourceOption(apiSourceOption: ApiSourceOption) {
    setApiSource(apiSourceOption);
    ApiSourceService.setApiSourceOption(apiSourceOption);
  }

  const [isApiBootstrapped, setIsApiBootstrapped] = useState<boolean>(false);

  const startApi = async (): Promise<void> => {
    await Api.bootstrapApi().then((bootstrapped) => {
      setIsApiBootstrapped(bootstrapped);
    });
  };

  useEffect(() => {
    // REMOVE: remove the check when the feature is stable
    if (ApiSourceService.getIsAutomaticSet() === false) {
      ApiSourceService.setApiSourceOption('automatic');
    }

    setNationalityModifier(displayNationality);
    startApi();
  }, []);

  useEffect(() => {
    if (locale === 'zh') {
      setDefinition(zh);
      setCurrentLocale('zh');
    } else {
      setDefinition(en);
      setCurrentLocale('en');
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

  const ValidRouter = () => (
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
        path={GetPlaceholderRoute(
          { type: 'trending-vtubers', sortOrder: 'livestream' },
          ':modifier',
        )}
        dictionary={definition}
        component={TrendingVTubersPage}
      />
      <Route
        path={GetRoute({ type: 'growing-vtubers' })}
        dictionary={definition}
        component={GrowingVTubersPage}
      />
      <Route
        path={GetRoute({ type: 'group-list' })}
        dictionary={definition}
        component={GroupListPage}
      />
      <Route
        path={GetRoute({ type: 'debut-vtubers' })}
        dictionary={definition}
        component={DebutVTubersPage}
      />
      <Route
        path={GetRoute({ type: 'anniversary-vtubers' })}
        dictionary={definition}
        component={AnniversaryVTubersPage}
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
        path={GetPlaceholderRoute({ type: 'trending-videos' }, ':modifier')}
        dictionary={definition}
        component={TrendingVideosPage}
      />
      <Route
        path={GetPlaceholderRoute({ type: 'vtubers-view-count' }, ':modifier')}
        dictionary={definition}
        component={VTubersViewCountPage}
      />
      <Route
        path={GetRoute({ type: 'year-end-statistic' })}
        dictionary={definition}
        component={YearEndStatistic}
      />
      <Redirect default to={GetRoute({ type: 'home' })} />
    </Router>
  );

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
              apiSource={apiSource}
              setApiSource={setApiSourceOption}
            />
            <ReloadPrompt />
            <ScrollToTopBottom />
            <VTuberProfileModal />
            <VideoModal />
            <ValidRouter />
          </>
        ) : (
          <span>Loading...</span>
        )}
      </IntlProvider>
    </div>
  );
}
