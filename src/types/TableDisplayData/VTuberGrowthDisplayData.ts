import { h } from 'preact';
import { Activity } from '../Common/Activity';
import { GrowthData } from '../Common/GrowthData';

export interface GrowthDisplayData extends GrowthData {
  percentage: number;
}

export interface VTuberGrowthDisplayData {
  id: string;
  profileImg: h.JSX.Element | null;
  name: string;
  channelLinks: h.JSX.Element | null;
  YouTubeSubscriberCount: number;
  _7DaysGrowth: GrowthDisplayData;
  _30DaysGrowth: GrowthDisplayData;
  group: string;
  nationality?: string;
  activity: Activity;
}
