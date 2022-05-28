import { BaseVTuberData } from './BaseVTuberData';
import { YouTubeViewCountGrowthData } from './YouTubeViewCountGrowthData';

export interface VTuberViewCountGrowthData extends BaseVTuberData {
  readonly YouTube: YouTubeViewCountGrowthData;
}

export interface VTuberViewCountChangeDataResponse {
  readonly VTubers: ReadonlyArray<VTuberViewCountGrowthData>;
}
