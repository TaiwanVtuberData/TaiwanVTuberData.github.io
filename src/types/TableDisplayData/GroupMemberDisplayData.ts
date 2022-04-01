import { Activity } from '../Common/Activity';
import { VideoInfo } from '../Common/VideoInfo';

export interface GroupMemberDisplayData {
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
  nationality?: string;
  activity: Activity;
}
