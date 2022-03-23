import { h } from 'preact';
import { VideoInfo } from '../Common/VideoInfo';
import { Activity } from '../Common/Activity';

export interface VTuberDisplayData {
  id: string;
  profileImg: h.JSX.Element | null;
  name: string;
  channelLinks: h.JSX.Element | null;
  hasYouTube: boolean;
  YouTubeSubscriberCount?: number;
  hasTwitch: boolean;
  TwitchFollowerCount: number;
  popularVideo?: VideoInfo;
  group: string;
  nationality?: string;
  activity: Activity;
}
