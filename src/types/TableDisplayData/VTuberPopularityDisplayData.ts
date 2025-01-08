import { VTuberDisplayData } from './VTuberDisplayData';

export interface VTuberPopularityDisplayData extends VTuberDisplayData {
  ranking: number;
  YouTubePopularity: number | null;
  TwitchPopularity: number | null;
}
