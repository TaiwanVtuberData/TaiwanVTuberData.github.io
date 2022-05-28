import { VTuberPopularityData } from '../../types/ApiData/VTuberPopularityData';
import { VTuberPopularityDisplayData } from '../../types/TableDisplayData/VTuberPopularityDisplayData';
import { VTuberBasicToDisplay } from './BasicTransform';

export const VTuberPopularityToDisplay = (
  e: VTuberPopularityData,
  ranking: number
): VTuberPopularityDisplayData => ({
  ...VTuberBasicToDisplay(e),
  YouTubePopularity: e.YouTube?.popularity ?? 0,
  TwitchPopularity: e.Twitch?.popularity ?? 0,
  ranking: ranking,
});
