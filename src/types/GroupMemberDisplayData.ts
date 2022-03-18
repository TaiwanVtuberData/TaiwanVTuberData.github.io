import { h } from 'preact';
import { Activity } from './Activity';

export interface GroupMemberDisplayData {
  id: string;
  profileImg: h.JSX.Element | null;
  name: string;
  channelLinks: h.JSX.Element | null;
  hasYouTube: boolean;
  YouTubeSubscriberCount?: number;
  hasTwitch: boolean;
  TwitchFollowerCount: number;
  nationality?: string;
  activity: Activity;
}
