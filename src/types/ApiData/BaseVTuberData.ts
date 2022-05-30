import { Activity } from '../Common/Activity';
import { BaseTwitchData } from '../Common/Twitch/BaseTwitchData';
import { VideoInfo } from '../Common/VideoInfo';
import { BaseYouTubeData } from '../Common/YouTube/BaseYouTubeData';

export interface BaseVTuberData {
  readonly id: string;
  readonly activity: Activity;
  readonly name: string;
  readonly imgUrl?: string;
  readonly YouTube?: BaseYouTubeData;
  readonly Twitch?: BaseTwitchData;
  readonly popularVideo?: VideoInfo;
  readonly group?: string;
  readonly nationality?: string;
}
