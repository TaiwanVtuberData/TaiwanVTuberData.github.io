import * as Api from '../../services/ApiService';
import { FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { Link } from 'preact-router';
import { StateUpdater, useState, useEffect } from 'preact/hooks';
import {
  NationalityModifier,
  nationalityArray,
} from '../../types/Common/NationalityModifier';
import { validI18n, LanguageOptions } from '../../types/LanguageOptions';
import { getFormattedDateTime } from '../../utils/DateTimeUtils';
import { GetRoute } from '../../utils/TypeSafeRouting';
import LanguageDropDown from '../LanguageDropDown';
import NationalityDropDown from '../NationalityDropDown';
import style from './style.module.css';
import AppVersion from '../../AppVersion';

export interface SidebarProps {
  locale: validI18n;
  setLocale: StateUpdater<validI18n>;
  nationality: NationalityModifier;
  setNationality: StateUpdater<NationalityModifier>;
}

const Sidebar: FunctionalComponent<SidebarProps> = (props: SidebarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const openSidebar = (): void => setSidebarOpen(true);
  const closeSidebar = (): void => setSidebarOpen(false);

  const [statisticUpdateTime, setStatisticUpdateTime] = useState<string>();
  const [VTuberDataUpdateTime, setVTuberDataUpdateTime] = useState<string>();

  const LinkElement = (textID: string, linkTo: string): h.JSX.Element => {
    return (
      <div class={style.gridItem}>
        <Link href={linkTo} onClick={(): void => setSidebarOpen(false)}>
          <Text id={textID}>empty</Text>
        </Link>
      </div>
    );
  };

  const getUpdateTime = async (): Promise<void> => {
    await Api.getUpdateTime().then((res) => {
      setStatisticUpdateTime(
        getFormattedDateTime(new Date(res.data.time.statisticUpdateTime))
      );
      setVTuberDataUpdateTime(
        getFormattedDateTime(new Date(res.data.time.VTuberDataUpdateTime))
      );
    });
  };

  useEffect(() => {
    getUpdateTime();
  }, []);

  return (
    <header>
      <button
        class={`${style.navButton} ${style.roundButton}`}
        onClick={openSidebar}
      >
        <img class={style.navIcon} />
      </button>
      <div
        class={style.sidebarOverlay}
        style={{ display: sidebarOpen ? 'block' : 'none' }}
        onClick={closeSidebar}
      />
      <div
        class={style.sidebarContent}
        style={{ display: sidebarOpen ? 'block' : 'none' }}
      >
        <button
          class={`${style.xButton} ${style.roundButton}`}
          onClick={closeSidebar}
        >
          <img class={style.xIcon} />
        </button>
        <nav class={style.navGrid}>
          <h1>
            <Text id="header.title">Taiwan VTuber Data</Text>
          </h1>
          {[
            { textID: 'header.home', linkTo: GetRoute({ type: 'home' }) },
            {
              textID: 'header.eventCalendar',
              linkTo: GetRoute({ type: 'event-calendar' }),
            },
            {
              textID: 'header.allVTubers',
              linkTo: GetRoute({ type: 'all-vtubers' }),
            },
            {
              textID: 'header.groupList',
              linkTo: GetRoute({ type: 'group-list' }),
            },
            {
              textID: 'header.trendingVTubers',
              linkTo: GetRoute({ type: 'trending-vtubers' }),
            },
            {
              textID: 'header.trendingVideos',
              linkTo: GetRoute({
                type: 'trending-videos',
                viewCountSortOrder: 'no-duplicate',
              }),
            },
            {
              textID: 'header.VTubersViewCount',
              linkTo: GetRoute({
                type: 'vtubers-view-count',
                viewCountSortOrder: '7-days',
              }),
            },
            {
              textID: 'header.growingVTubers',
              linkTo: GetRoute({ type: 'growing-vtubers' }),
            },
            {
              textID: 'header.debutVTubers',
              linkTo: GetRoute({ type: 'debut-vtubers' }),
            },
            {
              textID: 'header.graduateVTubers',
              linkTo: GetRoute({ type: 'graduate-vtubers' }),
            },
            {
              textID: 'header.reportIssue',
              linkTo: GetRoute({ type: 'report-issue' }),
            },
            { textID: 'header.about', linkTo: GetRoute({ type: 'about' }) },
          ].map((e) => LinkElement(e.textID, e.linkTo))}
          <span class={style.sidebarText}>
            <Text id="header.statisticUpdateTime">Statistic update time:</Text>
            {statisticUpdateTime}
          </span>
          <span class={style.sidebarText}>
            <Text id="header.VTuberDataUpdateTime">Data update time:</Text>
            {VTuberDataUpdateTime}
          </span>
          <div class={style.sidebarText}>
            <NationalityDropDown
              nationalityOptions={nationalityArray}
              nationality={props.nationality}
              onChange={(newNationality: NationalityModifier): void => {
                props.setNationality(newNationality);
                closeSidebar();
              }}
            />
          </div>
          <div class={style.sidebarText}>
            <LanguageDropDown
              languageOptions={LanguageOptions}
              locale={props.locale}
              onChange={(newLanguage: validI18n): void => {
                props.setLocale(newLanguage);
                closeSidebar();
              }}
            />
          </div>
          <div class={style.sidebarText}>
            <span>
              <Text id="header.appVersion">Version: </Text>
              {AppVersion}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
