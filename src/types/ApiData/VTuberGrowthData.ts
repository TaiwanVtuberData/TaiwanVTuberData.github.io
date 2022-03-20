import { VTuberData } from './VTuberData';
import { YouTubeGrowthData } from './YouTubeGrowthData';

export interface VTuberGrowthData extends VTuberData {
  readonly YouTube: YouTubeGrowthData;
}

export interface VTuberGrowthDataResponse {
  readonly VTubers: ReadonlyArray<VTuberGrowthData>;
}
