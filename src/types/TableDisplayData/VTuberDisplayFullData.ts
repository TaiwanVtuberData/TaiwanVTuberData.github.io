import { VTuberData } from '../ApiData/VTuberData';
import { VTuberLivestreamDisplayData } from './VTuberLivestreamDisplayData';

export interface VTuberDisplayFullData extends VTuberData {
  debutDate?: string;
  graduateDate?: string;
  livestreams: Array<VTuberLivestreamDisplayData>;
}
