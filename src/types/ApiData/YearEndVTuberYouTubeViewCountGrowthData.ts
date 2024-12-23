import { YouTubeViewCountGrowthData } from "../Common/YouTube/YouTubeViewCountGrowthData";
import { BaseVTuberData } from "./BaseVTuberData";

export interface YearEndVTuberYouTubeViewCountGrowthData
  extends BaseVTuberData {
  readonly YouTube: YouTubeViewCountGrowthData;
}

export interface YearEndVTuberViewCountChangeDataResponse {
  readonly VTubers: ReadonlyArray<YearEndVTuberYouTubeViewCountGrowthData>;
}
