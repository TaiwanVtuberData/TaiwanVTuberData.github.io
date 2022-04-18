import { VTuberDisplayData } from './VTuberDisplayData';

export interface VTuberDisplayFullData extends VTuberDisplayData {
  readonly debutDate?: string;
  readonly graduateDate?: string;
}
