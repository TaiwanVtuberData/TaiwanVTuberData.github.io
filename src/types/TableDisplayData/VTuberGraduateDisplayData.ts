import { Activity } from '../Common/Activity';
import { VideoInfo } from '../Common/VideoInfo';

export interface VTuberGraduateDisplayData {
  id: string;
  isToday: boolean;
  graduateDate: string;
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
