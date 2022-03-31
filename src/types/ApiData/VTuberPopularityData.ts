import { TwitchPopularityData } from './TwitchPopularityData';
import { VTuberData } from './VTuberData';
import { YouTubePopularityData } from './YouTubePopularityData';

export interface VTuberPopularityData extends VTuberData {
  readonly YouTube?: YouTubePopularityData;
  readonly Twitch?: TwitchPopularityData;
}

export interface VTuberPopularityDataResponse {
  readonly VTubers: ReadonlyArray<VTuberPopularityData>;
}
