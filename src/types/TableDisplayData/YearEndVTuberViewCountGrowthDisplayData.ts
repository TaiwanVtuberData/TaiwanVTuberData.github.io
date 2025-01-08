import { Activity } from '../Common/Activity';
import { GrowthData } from '../Common/GrowthData';
import { DebutInfo } from '../DebutInfo';

export interface YearEndVTuberViewCountGrowthDisplayData {
  id: string;
  name: string;
  imgUrl: string | null;
  YouTubeId: string | null;
  TwitchId: string | null;
  totalViewCount: number;
  _1YearGrowth: GrowthData;
  group: string | null;
  nationality: string | null;
  debutInfo: DebutInfo;
  debutDate: string | null;
  activity: Activity;
  ranking: number;
}
