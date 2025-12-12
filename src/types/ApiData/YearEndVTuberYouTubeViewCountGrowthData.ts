import { YearEndYouTubeViewCountGrowthData } from '../Common/YouTube/YearEndYouTubeViewCountGrowthData';
import { BaseVTuberData } from './BaseVTuberData';

export interface YearEndVTuberYouTubeViewCountGrowthData extends BaseVTuberData {
  readonly YouTube: YearEndYouTubeViewCountGrowthData;
  readonly debutDate: string | null;
}

export interface YearEndVTuberViewCountChangeDataResponse {
  readonly VTubers: ReadonlyArray<YearEndVTuberYouTubeViewCountGrowthData>;
}
