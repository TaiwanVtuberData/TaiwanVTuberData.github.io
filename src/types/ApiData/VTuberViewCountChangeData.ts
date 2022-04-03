import { VTuberData } from './VTuberData';
import { YouTubeViewCountGrowthData } from './YouTubeViewCountGrowthData';

export interface VTuberViewCountGrowthData extends VTuberData {
  readonly YouTube: YouTubeViewCountGrowthData;
}

export interface VTuberViewCountChangeDataResponse {
  readonly VTubers: ReadonlyArray<VTuberViewCountGrowthData>;
}
