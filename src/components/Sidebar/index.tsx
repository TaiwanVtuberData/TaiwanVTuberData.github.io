import { FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { Link } from 'preact-router/match';
import { StateUpdater, useEffect, useState } from 'preact/hooks';
import * as Api from '../../services/ApiService';
import {
  nationalityArray,
  NationalityModifier,
} from '../../types/Common/NationalityModifier';
import {
  LanguageOption,
  LanguageOptions,
  validI18n,
} from '../../types/LanguageOptions';
import { getFormattedDateTime } from '../../utils/DateTimeUtils';
import { GetRoute } from '../../utils/TypeSafeRouting';
import style from './style.module.css';

export interface SidebarProps {
  locale: validI18n;
  setLocale: StateUpdater<validI18n>;
  nationality: NationalityModifier;
  setNationality: StateUpdater<NationalityModifier>;
}

const Sidebar: FunctionalComponent<SidebarProps> = (props: SidebarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const open = (): void => setSidebarOpen(true);
  const close = (): void => setSidebarOpen(false);

  const [statisticUpdateTime, setStatisticUpdateTime] = useState<string>();
  const [VTuberDataUpdateTime, setVTuberDataUpdateTime] = useState<string>();

  const LanguageDropDown = (
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

  const NationalityDropDown = (
    nationalityOptions: ReadonlyArray<NationalityModifier>,
    nationality: NationalityModifier,
    setNationality: StateUpdater<NationalityModifier>
  ): h.JSX.Element => {
    return (
      <div class={style.sidebarText}>
        <Text id="header.showVTubersOfNationality">
          Show VTuber Nationality:
        </Text>
        <select
          class={style.dropDown}
          value={nationality}
          onChange={(event: any) => {
            setNationality(event.target.value);
            close();
          }}
        >
          {nationalityOptions.map((e) => (
            <option key={e} value={e}>
              <Text id={`nationalityTitle.${e}`}>placeholder</Text>
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
          {NationalityDropDown(
            nationalityArray,
            props.nationality,
            props.setNationality
          )}
          {LanguageDropDown(LanguageOptions, props.locale, props.setLocale)}
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
