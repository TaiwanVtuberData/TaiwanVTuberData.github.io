import { Activity } from '../Common/Activity';
import { GrowthData } from '../Common/GrowthData';
import { VideoInfo } from '../Common/VideoInfo';

export interface GrowthDisplayData extends GrowthData {
  percentage: number;
}

export interface VTuberGrowthDisplayData {
  id: string;
  name: string;
  imgUrl?: string;
  YouTubeId?: string;
  TwitchId?: string;
  YouTubeSubscriberCount: number;
  _7DaysGrowth: GrowthDisplayData;
  _30DaysGrowth: GrowthDisplayData;
  popularVideo?: VideoInfo;
  group: string;
  nationality?: string;
  activity: Activity;
}
