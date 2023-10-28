import { YouTubeGrowthData } from "../Common/YouTube/YouTubeGrowthData";
import { VTuberData } from "./VTuberData";

export interface VTuberGrowthData extends VTuberData {
  readonly YouTube: YouTubeGrowthData;
}

export interface VTuberGrowthDataResponse {
  readonly VTubers: ReadonlyArray<VTuberGrowthData>;
}
