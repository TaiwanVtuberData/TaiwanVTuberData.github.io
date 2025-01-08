import { AnniversaryDebutInfo } from '../DebutInfo';
import { VTuberDisplayData } from './VTuberDisplayData';

export interface VTuberAnniversaryDisplayData extends VTuberDisplayData {
  debutInfo: AnniversaryDebutInfo;
  debutDate: string;
  anniversaryYearCount: number;
}
