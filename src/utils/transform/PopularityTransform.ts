import { VTuberPopularityData } from "../../types/ApiData/VTuberPopularityData";
import { VTuberPopularityDisplayData } from "../../types/TableDisplayData/VTuberPopularityDisplayData";
import { VTuberBasicToDisplay } from "./BasicTransform";

export const VTuberPopularityToDisplay = (
  e: VTuberPopularityData,
  ranking: number,
): VTuberPopularityDisplayData => ({
  ...VTuberBasicToDisplay(e),
  YouTubePopularity: e.YouTube?.popularity,
  TwitchPopularity: e.Twitch?.popularity,
  ranking: ranking,
});
