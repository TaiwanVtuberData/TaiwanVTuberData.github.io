import { TwitchData } from '../Common/Twitch/TwitchData';
import { YouTubeData } from '../Common/YouTube/YouTubeData';
import { BaseVTuberData } from './BaseVTuberData';

export interface VTuberData extends BaseVTuberData {
  readonly YouTube?: YouTubeData;
  readonly Twitch?: TwitchData;
  readonly debutDate?: string;
}

export interface VTuberDataResponse {
  readonly VTubers: ReadonlyArray<VTuberData>;
}
