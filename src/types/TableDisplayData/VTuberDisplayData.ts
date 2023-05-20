import { VideoInfo } from '../Common/VideoInfo';
import { Activity } from '../Common/Activity';
import { CountType } from '../Common/CountType';
import { DebutInfo } from '../DebutInfo';

export interface VTuberDisplayData {
  id: string;
  activity: Activity;
  name: string;
  imgUrl?: string;
  YouTubeId?: string;
  YouTubeSubscriber?: CountType;
  TwitchId?: string;
  TwitchFollower?: CountType;
  popularVideo?: VideoInfo;
  group?: string;
  nationality?: string;
  debutInfo: DebutInfo;
}
