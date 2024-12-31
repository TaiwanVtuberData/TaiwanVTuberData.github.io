import { VTuberViewCountGrowthData } from "../../types/ApiData/VTuberViewCountChangeData";
import { YearEndVTuberYouTubeViewCountGrowthData } from "../../types/ApiData/YearEndVTuberYouTubeViewCountGrowthData";
import { DebutInfo } from "../../types/DebutInfo";
import { VTuberViewCountGrowthDisplayData } from "../../types/TableDisplayData/VTuberViewCountGrowthDisplayData";
import { YearEndVTuberViewCountGrowthDisplayData } from "../../types/TableDisplayData/YearEndVTuberViewCountGrowthDisplayData";
import { getDebutDate } from "../DebutInfoUtils";
import { maybeDebutStringToDebutInfo } from "./DebutStringToDebutInfo";

export const VTuberViewCountToDisplay = (
  e: VTuberViewCountGrowthData,
  ranking: number,
): VTuberViewCountGrowthDisplayData => ({
  id: e.id,
  name: e.name,
  imgUrl: e.imgUrl,
  YouTubeId: e.YouTube.id,
  TwitchId: e.Twitch?.id || null,
  totalViewCount: e.YouTube.totalViewCount,
  _7DaysGrowth: e.YouTube._7DaysGrowth,
  _30DaysGrowth: e.YouTube._30DaysGrowth,
  popularVideo: e.popularVideo,
  group: e.group,
  nationality: e.nationality,
  activity: e.activity,
  ranking: ranking,
});

export const YearEndVTuberYouTubeViewCountGrowthToDisplay = (
  e: YearEndVTuberYouTubeViewCountGrowthData,
  ranking: number,
): YearEndVTuberViewCountGrowthDisplayData => {
  const debutInfo: DebutInfo = maybeDebutStringToDebutInfo(e.debutDate);

  return {
    id: e.id,
    name: e.name,
    imgUrl: e.imgUrl,
    YouTubeId: e.YouTube.id,
    TwitchId: e.Twitch?.id || null,
    totalViewCount: e.YouTube.totalViewCount,
    _1YearGrowth: e.YouTube._1YearGrowth,
    group: e.group,
    nationality: e.nationality,
    activity: e.activity,
    ranking: ranking,
    debutInfo: debutInfo,
    debutDate: getDebutDate(debutInfo),
  };
};
