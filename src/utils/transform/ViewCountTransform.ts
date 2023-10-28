import { VTuberViewCountGrowthData } from "../../types/ApiData/VTuberViewCountChangeData";
import { VTuberViewCountGrowthDisplayData } from "../../types/TableDisplayData/VTuberViewCountGrowthDisplayData";

export const VTuberViewCountToDisplay = (
  e: VTuberViewCountGrowthData,
  ranking: number,
): VTuberViewCountGrowthDisplayData => ({
  id: e.id,
  name: e.name,
  imgUrl: e.imgUrl,
  YouTubeId: e.YouTube.id,
  TwitchId: e.Twitch?.id,
  totalViewCount: e.YouTube.totalViewCount,
  _7DaysGrowth: e.YouTube._7DaysGrowth,
  _30DaysGrowth: e.YouTube._30DaysGrowth,
  popularVideo: e.popularVideo,
  group: e.group,
  nationality: e.nationality,
  activity: e.activity,
  ranking: ranking,
});
