import { FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { Link } from 'preact-router/match';
import { StateUpdater, useEffect, useState } from 'preact/hooks';
import * as Api from '../../services/ApiService';
import {
  LanguageOption,
  LanguageOptions,
  validI18n,
} from '../../types/LanguageOptions';
import { getFormattedDateTime } from '../../utils/DateTimeUtils';
import style from './style.module.css';

export interface SidebarProps {
  siteUrlPrefix?: string;
  locale: validI18n;
  setLocale: StateUpdater<validI18n>;
}

const Sidebar: FunctionalComponent<SidebarProps> = (props: SidebarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const open = (): void => setSidebarOpen(true);
  const close = (): void => setSidebarOpen(false);
  // use default URL prefix (no prefix) if in development
  const SITE_URL_PREFIX: string = props.siteUrlPrefix ?? '';

  const [statisticUpdateTime, setStatisticUpdateTime] = useState<string>();
  const [VTuberDataUpdateTime, setVTuberDataUpdateTime] = useState<string>();

  const DropDownElement = (
    languageOptions: Array<LanguageOption>,
    locale: string,
    setLocale: StateUpdater<validI18n>
  ): h.JSX.Element => {
    return (
      <div class={style.sidebarText}>
        <Text id="header.chooseLanguage">Choose language:</Text>
        <select
          class={style.dropDown}
          value={locale}
          onChange={(event: any) => {
            setLocale(event.target.value);
            close();
          }}
        >
          {languageOptions.map((e) => (
            <option key={e.i18n} value={e.i18n}>
              {e.displayText}
            </option>
          ))}
        </select>
      </div>
    );
  };

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
      <button class={`${style.navButton} ${style.roundButton}`} onClick={open}>
        <img class={style.navIcon} />
      </button>
      <div
        class={style.sidebarOverlay}
        style={{ display: sidebarOpen ? 'block' : 'none' }}
        onClick={close}
      />
      <div
        class={style.sidebarContent}
        style={{ display: sidebarOpen ? 'block' : 'none' }}
      >
        <button class={`${style.xButton} ${style.roundButton}`} onClick={close}>
          <img class={style.xIcon} />
        </button>
        <nav class={style.navGrid}>
          <h1>
            <Text id="header.title">Taiwan VTuber Data</Text>
          </h1>
          {[
            { textID: 'header.home', linkTo: `${SITE_URL_PREFIX}/` },
            {
              textID: 'header.eventCalendar',
              linkTo: `${SITE_URL_PREFIX}/event-calendar`,
            },
            {
              textID: 'header.allVTubers',
              linkTo: `${SITE_URL_PREFIX}/all-vtubers`,
            },
            {
              textID: 'header.groupList',
              linkTo: `${SITE_URL_PREFIX}/group-list`,
            },
            {
              textID: 'header.trendingVTubers',
              linkTo: `${SITE_URL_PREFIX}/trending-vtubers`,
            },
            {
              textID: 'header.trendingVideos',
              linkTo: `${SITE_URL_PREFIX}/trending-videos/no-duplicate`,
            },
            {
              textID: 'header.growingVTubers',
              linkTo: `${SITE_URL_PREFIX}/growing-vtubers`,
            },
            {
              textID: 'header.debutVTubers',
              linkTo: `${SITE_URL_PREFIX}/debut-vtubers`,
            },
            {
              textID: 'header.graduateVTubers',
              linkTo: `${SITE_URL_PREFIX}/graduate-vtubers`,
            },
            {
              textID: 'header.reportIssue',
              linkTo: `${SITE_URL_PREFIX}/report-issue`,
            },
            { textID: 'header.about', linkTo: `${SITE_URL_PREFIX}/about` },
          ].map((e) => LinkElement(e.textID, e.linkTo))}
          <span class={style.sidebarText}>
            <Text id="header.statisticUpdateTime">Statistic update time:</Text>
            {statisticUpdateTime}
          </span>
          <span class={style.sidebarText}>
            <Text id="header.VTuberDataUpdateTime">
              VTuber data update time:
            </Text>
            {VTuberDataUpdateTime}
          </span>
          {DropDownElement(LanguageOptions, props.locale, props.setLocale)}
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
