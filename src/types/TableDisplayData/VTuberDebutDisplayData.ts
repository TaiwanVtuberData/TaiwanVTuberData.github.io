import { HasDebutInfo } from '../DebutInfo';
import { VTuberDisplayData } from './VTuberDisplayData';

export interface VTuberDebutDisplayData extends VTuberDisplayData {
  debutInfo: HasDebutInfo;
  debutDate: string;
}
