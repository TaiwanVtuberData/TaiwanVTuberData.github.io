import { GrowthData } from "../GrowthData";
import { BaseYouTubeData } from "./BaseYouTubeData";

export interface YouTubeViewCountGrowthData extends BaseYouTubeData {
  readonly totalViewCount: number;
  readonly _7DaysGrowth: GrowthData;
  readonly _30DaysGrowth: GrowthData;
}
