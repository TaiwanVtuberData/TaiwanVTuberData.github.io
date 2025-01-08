import { VTuberDisplayData } from './VTuberDisplayData';

export interface VTuberGraduateDisplayData extends VTuberDisplayData {
  isToday: boolean;
  graduateDate: string;
}
