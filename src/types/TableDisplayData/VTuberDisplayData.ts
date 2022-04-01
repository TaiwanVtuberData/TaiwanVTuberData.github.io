import { VideoInfo } from '../Common/VideoInfo';
import { Activity } from '../Common/Activity';

export interface VTuberDisplayData {
  id: string;
  name: string;
  imgUrl?: string;
  hasYouTube: boolean;
  YouTubeId?: string;
  YouTubeSubscriberCount?: number;
  hasTwitch: boolean;
  TwitchId?: string;
  TwitchFollowerCount: number;
  popularVideo?: VideoInfo;
  group: string;
  nationality?: string;
  activity: Activity;
}
