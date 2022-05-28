import { TwitchPopularityData } from '../Common/TwitchPopularityData';
import { YouTubePopularityData } from '../Common/YouTubePopularityData';
import { VTuberData } from './VTuberData';

export interface VTuberPopularityData extends VTuberData {
  readonly YouTube?: YouTubePopularityData;
  readonly Twitch?: TwitchPopularityData;
}

export interface VTuberPopularityDataResponse {
  readonly VTubers: ReadonlyArray<VTuberPopularityData>;
}
