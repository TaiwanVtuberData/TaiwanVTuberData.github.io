import { VTuberData } from './VTuberData';
import { VTuberLivestreamData } from './VTuberLivestreamData';

export interface VTuberFullData extends VTuberData {
  readonly debutDate: string | null;
  readonly graduateDate: string | null;
  readonly livestreams: Array<VTuberLivestreamData>;
}

export interface SingleVTuberFullDataResponse {
  readonly VTuber: VTuberFullData;
}
