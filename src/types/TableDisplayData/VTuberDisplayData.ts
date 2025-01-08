import { Activity } from '../Common/Activity';
import { CountType } from '../Common/CountType';
import { VideoInfo } from '../Common/VideoInfo';
import { DebutInfo } from '../DebutInfo';

export interface VTuberDisplayData {
  id: string;
  activity: Activity;
  name: string;
  imgUrl: string | null;
  YouTubeId: string | null;
  YouTubeSubscriber: CountType | null;
  TwitchId: string | null;
  TwitchFollower: CountType | null;
  popularVideo: VideoInfo | null;
  group: string | null;
  nationality: string | null;
  debutInfo: DebutInfo;
  debutDate: string | null;
}
