import { Activity } from '../Common/Activity';
import { GrowthData } from '../Common/GrowthData';
import { VideoInfo } from '../Common/VideoInfo';

export interface VTuberViewCountGrowthDisplayData {
  id: string;
  name: string;
  imgUrl?: string;
  YouTubeId?: string;
  TwitchId?: string;
  totalViewCount: number;
  _7DaysGrowth: GrowthData;
  _30DaysGrowth: GrowthData;
  popularVideo?: VideoInfo;
  group: string;
  nationality?: string;
  activity: Activity;
  ranking: number;
}
