import { YouTubeViewCountGrowthData } from "../Common/YouTube/YouTubeViewCountGrowthData";
import { BaseVTuberData } from "./BaseVTuberData";

export interface VTuberViewCountGrowthData extends BaseVTuberData {
  readonly YouTube: YouTubeViewCountGrowthData;
}

export interface VTuberViewCountChangeDataResponse {
  readonly VTubers: ReadonlyArray<VTuberViewCountGrowthData>;
}
