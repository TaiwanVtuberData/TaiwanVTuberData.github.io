import { VTuberDisplayData } from './VTuberDisplayData';

export interface VTuberDebutDisplayData extends VTuberDisplayData {
  isToday: boolean;
  debutDate: string;
}
