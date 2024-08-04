import { Activity } from "../Common/Activity";
import { GrowthData } from "../Common/GrowthData";
import { VideoInfo } from "../Common/VideoInfo";

export interface VTuberViewCountGrowthDisplayData {
  id: string;
  name: string;
  imgUrl: string | null;
  YouTubeId: string | null;
  TwitchId: string | null;
  totalViewCount: number;
  _7DaysGrowth: GrowthData;
  _30DaysGrowth: GrowthData;
  popularVideo: VideoInfo | null;
  group: string | null;
  nationality: string | null;
  activity: Activity;
  ranking: number;
}
