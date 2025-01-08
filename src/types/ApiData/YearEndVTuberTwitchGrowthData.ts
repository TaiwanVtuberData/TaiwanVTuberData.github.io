import { YearEndTwitchGrowthData } from '../Common/YouTube/YearEndTwitchGrowthData';
import { VTuberData } from './VTuberData';

export interface YearEndVTuberTwitchGrowthData extends VTuberData {
  readonly Twitch: YearEndTwitchGrowthData;
}

export interface YearEndVTuberTwitchGrowthDataResponse {
  readonly VTubers: ReadonlyArray<YearEndVTuberTwitchGrowthData>;
}
