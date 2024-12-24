import * as Api from "../../services/ApiService";
import { FunctionalComponent, JSX } from "preact";
import { Text } from "preact-i18n";
import { Link } from "preact-router";
import { StateUpdater, useState, useEffect, Dispatch } from "preact/hooks";
import {
  NationalityModifier,
  nationalityArray,
} from "../../types/Common/NationalityModifier";
import { validI18n, LanguageOptions } from "../../types/LanguageOptions";
import { getFormattedDateTime } from "../../utils/DateTimeUtils";
import { GetRoute } from "../../utils/TypeSafeRouting";
import LanguageDropDown from "../LanguageDropDown";
import NationalityDropDown from "../NationalityDropDown";
import style from "./style.module.css";
import { APP_VERSION, ENABLE_YEAR_END_STATISTIC } from "../../Config";
import { ApiSourceModifier } from "../../types/Common/ApiSource";
import ApiSourceDropDown from "../ApiSourceDropDown";
import { ApiSourceOptions } from "../../types/ApiSourceOptions";

export interface SidebarProps {
  locale: validI18n;
  setLocale: Dispatch<StateUpdater<validI18n>>;
  nationality: NationalityModifier;
  setNationality: Dispatch<StateUpdater<NationalityModifier>>;
  apiSource: ApiSourceModifier;
  setApiSource: Dispatch<StateUpdater<ApiSourceModifier>>;
}

const Sidebar: FunctionalComponent<SidebarProps> = (props: SidebarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const openSidebar = (): void => setSidebarOpen(true);
  const closeSidebar = (): void => setSidebarOpen(false);

  const [statisticUpdateTime, setStatisticUpdateTime] = useState<string>();
  const [VTuberDataUpdateTime, setVTuberDataUpdateTime] = useState<string>();

  const getUpdateTime = async (): Promise<void> => {
    await Api.getUpdateTime().then((res) => {
      setStatisticUpdateTime(
        getFormattedDateTime(new Date(res.data.time.statisticUpdateTime)),
      );
      setVTuberDataUpdateTime(
        getFormattedDateTime(new Date(res.data.time.VTuberDataUpdateTime)),
      );
    });
  };

  useEffect(() => {
    getUpdateTime();
  }, []);

  const LinkElement = (textID: string, linkTo: string): JSX.Element => {
    return (
      <div class={style.gridItem}>
        <Link href={linkTo} onClick={(): void => setSidebarOpen(false)}>
          <Text id={textID}>empty</Text>
        </Link>
      </div>
    );
  };

  const NavigationLinks = (): JSX.Element => {
    const links = [
      { textID: "header.home", linkTo: GetRoute({ type: "home" }) },
      ENABLE_YEAR_END_STATISTIC === true
        ? {
            textID: "header.yearEndStatistic",
            linkTo: GetRoute({ type: "year-end-statistic" }),
          }
        : null,
      {
        textID: "header.livestreaming",
        linkTo: GetRoute({ type: "livestreams" }),
      },
      {
        textID: "header.eventCalendar",
        linkTo: GetRoute({ type: "event-calendar" }),
      },
      {
        textID: "header.allVTubers",
        linkTo: GetRoute({ type: "all-vtubers" }),
      },
      {
        textID: "header.groupList",
        linkTo: GetRoute({ type: "group-list" }),
      },
      {
        textID: "header.trendingVTubers",
        linkTo: GetRoute({
          type: "trending-vtubers",
          sortOrder: "livestream",
        }),
      },
      {
        textID: "header.trendingVideos",
        linkTo: GetRoute({
          type: "trending-videos",
          sortOrder: "no-duplicate",
        }),
      },
      {
        textID: "header.VTubersViewCount",
        linkTo: GetRoute({
          type: "vtubers-view-count",
          sortOrder: "7-days",
        }),
      },
      {
        textID: "header.growingVTubers",
        linkTo: GetRoute({ type: "growing-vtubers" }),
      },
      {
        textID: "header.debutVTubers",
        linkTo: GetRoute({ type: "debut-vtubers" }),
      },
      {
        textID: "header.anniversaryVTubers",
        linkTo: GetRoute({ type: "anniversary-vtubers" }),
      },
      {
        textID: "header.graduateVTubers",
        linkTo: GetRoute({ type: "graduate-vtubers" }),
      },
      {
        textID: "header.reportIssue",
        linkTo: GetRoute({ type: "report-issue" }),
      },
      { textID: "header.about", linkTo: GetRoute({ type: "about" }) },
    ];

    return (
      <div class={style.navGrid}>
        {links.map((e) =>
          e !== null ? LinkElement(e.textID, e.linkTo) : <></>,
        )}
      </div>
    );
  };

  const SidebarTexts = (): JSX.Element => {
    return (
      <div class={style.sidebarTextContainer}>
        <div>
          <span>
            <Text id="header.videoInformationUpdateTime">
              Video information update time:
            </Text>
            {statisticUpdateTime}
          </span>
        </div>
        <div>
          <span>
            <Text id="header.VTuberDataUpdateTime">Data update time:</Text>
            {VTuberDataUpdateTime}
          </span>
        </div>
        <div>
          <NationalityDropDown
            nationalityOptions={nationalityArray}
            nationality={props.nationality}
            onChange={(newNationality: NationalityModifier): void => {
              props.setNationality(newNationality);
              closeSidebar();
            }}
          />
        </div>
        <div>
          <LanguageDropDown
            languageOptions={LanguageOptions}
            locale={props.locale}
            onChange={(newLanguage: validI18n): void => {
              props.setLocale(newLanguage);
              closeSidebar();
            }}
          />
        </div>
        <div>
          <ApiSourceDropDown
            apiSourceOptions={ApiSourceOptions}
            apiSource={props.apiSource}
            onChange={(newApiSource: ApiSourceModifier): void => {
              props.setApiSource(newApiSource);
              closeSidebar();
            }}
          />
        </div>
        <div>
          <span>
            <Text id="header.appVersion">Version: </Text>
            {APP_VERSION}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <button class={style.navButton} onClick={openSidebar}>
        <img class={style.navIcon} />
      </button>
      <div
        class={style.sidebarOverlay}
        style={{ display: sidebarOpen ? "block" : "none" }}
        onClick={closeSidebar}
      />
      <div style={{ display: sidebarOpen ? "block" : "none" }}>
        <div class={style.sidebarContent}>
          <button class={style.xButton} onClick={closeSidebar}>
            <img class={style.xIcon} />
          </button>
          <h1>
            <Text id="header.title">Taiwan VTuber Data</Text>
          </h1>
          <NavigationLinks />
          <SidebarTexts />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
