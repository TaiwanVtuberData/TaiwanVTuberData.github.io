import { VTuberData } from './VTuberData';
import { VTuberLivestreamData } from './VTuberLivestreamData';

export interface VTuberFullData extends VTuberData {
  readonly debutDate?: string;
  readonly graduateDate?: string;
  readonly livestreams: Array<VTuberLivestreamData>;
}

export interface SingleVTuberFullDataResponse {
  readonly VTuber: VTuberFullData;
}
