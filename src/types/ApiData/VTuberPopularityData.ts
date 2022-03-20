import { VTuberData } from './VTuberData';

export interface VTuberPopularityData extends VTuberData {
  readonly popularity: number;
}

export interface VTuberPopularityDataResponse {
  readonly VTubers: ReadonlyArray<VTuberPopularityData>;
}
