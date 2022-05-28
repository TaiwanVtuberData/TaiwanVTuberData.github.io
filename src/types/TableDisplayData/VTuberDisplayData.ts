import { VideoInfo } from '../Common/VideoInfo';
import { Activity } from '../Common/Activity';
import { CountType } from '../Common/CountType';

export interface VTuberDisplayData {
  id: string;
  activity: Activity;
  name: string;
  imgUrl?: string;
  YouTubeId?: string;
  YouTubeSubscriber?: CountType;
  TwitchId?: string;
  TwitchFollowerCount?: number;
  popularVideo?: VideoInfo;
  group?: string;
  nationality?: string;
}
