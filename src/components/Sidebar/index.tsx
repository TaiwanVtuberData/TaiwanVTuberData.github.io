import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { Link } from 'preact-router/match';
import { StateUpdater, useState } from 'preact/hooks';
import {
  LanguageOption,
  LanguageOptions,
  validI18n,
} from '../../types/LanguageOptions';
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

  const DropDownElement = (
    languageOptions: Array<LanguageOption>,
    locale: string,
    setLocale: StateUpdater<validI18n>
  ): h.JSX.Element => {
    return (
      <div class={style.gridItem}>
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

  return (
    <header>
      <button class={style.navButton} onClick={open}>
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
        <button class={style.xButton} onClick={close}>
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
          {DropDownElement(LanguageOptions, props.locale, props.setLocale)}
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
