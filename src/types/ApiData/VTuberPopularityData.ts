import { TwitchPopularityData } from '../Common/Twitch/TwitchPopularityData';
import { YouTubePopularityData } from '../Common/YouTube/YouTubePopularityData';
import { VTuberData } from './VTuberData';

export interface VTuberPopularityData extends VTuberData {
  readonly YouTube: YouTubePopularityData | null;
  readonly Twitch: TwitchPopularityData | null;
}

export interface VTuberPopularityDataResponse {
  readonly VTubers: ReadonlyArray<VTuberPopularityData>;
}
