import { YearEndYouTubeGrowthData } from '../Common/YouTube/YearEndYouTubeGrowthData';
import { VTuberData } from './VTuberData';

export interface YearEndVTuberYouTubeGrowthData extends VTuberData {
  readonly YouTube: YearEndYouTubeGrowthData;
}

export interface YearEndVTuberYouTubeGrowthDataResponse {
  readonly VTubers: ReadonlyArray<YearEndVTuberYouTubeGrowthData>;
}
