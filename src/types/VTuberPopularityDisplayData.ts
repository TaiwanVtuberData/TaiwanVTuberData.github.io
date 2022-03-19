import { VTuberDisplayData } from './VTuberDisplayData';

export interface VTuberPopularityDisplayData extends VTuberDisplayData {
  ranking: number;
  popularity: number;
}
