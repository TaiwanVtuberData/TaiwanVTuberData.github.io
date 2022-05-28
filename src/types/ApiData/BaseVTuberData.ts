import { Activity } from '../Common/Activity';
import { TwitchData } from '../Common/TwitchData';
import { VideoInfo } from '../Common/VideoInfo';
import { BaseYouTubeData } from '../Common/YouTube/BaseYouTubeData';

export interface BaseVTuberData {
  readonly id: string;
  readonly activity: Activity;
  readonly name: string;
  readonly imgUrl?: string;
  readonly YouTube?: BaseYouTubeData;
  readonly Twitch?: TwitchData;
  readonly popularVideo?: VideoInfo;
  readonly group?: string;
  readonly nationality?: string;
}
