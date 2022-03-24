import { h } from 'preact';
import { Activity } from '../Common/Activity';
import { VideoInfo } from '../Common/VideoInfo';

export interface GroupMemberDisplayData {
  id: string;
  profileImg: h.JSX.Element | null;
  name: string;
  channelLinks: h.JSX.Element | null;
  hasYouTube: boolean;
  YouTubeSubscriberCount?: number;
  hasTwitch: boolean;
  TwitchFollowerCount: number;
  popularVideo?: VideoInfo;
  nationality?: string;
  activity: Activity;
}
