import { Activity } from './Activity';
import { TwitchData } from './TwitchData';
import { YouTubeData } from './YouTubeData';

export interface VTuberData {
  id: string;
  activity: Activity;
  name: string;
  imgUrl?: string;
  YouTube?: YouTubeData;
  Twitch?: TwitchData;
  group?: string;
  nationality?: string;
}

export interface VTuberDataResponse {
  VTubers: Array<VTuberData>;
}
