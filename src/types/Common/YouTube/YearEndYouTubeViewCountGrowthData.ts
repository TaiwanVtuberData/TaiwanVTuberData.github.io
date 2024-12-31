import { GrowthData } from "../GrowthData";
import { BaseYouTubeData } from "./BaseYouTubeData";

export interface YearEndYouTubeViewCountGrowthData extends BaseYouTubeData {
  readonly totalViewCount: number;
  readonly _1YearGrowth: GrowthData;
}
