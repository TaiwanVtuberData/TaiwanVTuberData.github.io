import { VTuberPopularityData } from "../../types/ApiData/VTuberPopularityData";
import { VTuberPopularityDisplayData } from "../../types/TableDisplayData/VTuberPopularityDisplayData";
import { VTuberBasicToDisplay } from "./BasicTransform";

export const VTuberPopularityToDisplay = (
  e: VTuberPopularityData,
  ranking: number,
): VTuberPopularityDisplayData => ({
  ...VTuberBasicToDisplay(e),
  YouTubePopularity: e.YouTube?.popularity || null,
  TwitchPopularity: e.Twitch?.popularity || null,
  ranking: ranking,
});
