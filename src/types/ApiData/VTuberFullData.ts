import { VTuberData } from './VTuberData';

export interface VTuberFullData extends VTuberData {
  readonly debutDate?: string;
  readonly graduateDate?: string;
}

export interface SingleVTuberFullDataResponse {
  readonly VTuber: VTuberFullData;
}
