import { VTuberDebutData } from '../../types/ApiData/VTuberDebutData';
import { VTuberDebutDisplayData } from '../../types/TableDisplayData/VTuberDebutDisplayData';
import { VTuberBasicToDisplay } from './BasicTransform';

export const VTuberDebutToDisplay = (
  e: VTuberDebutData,
  todayDate: string
): VTuberDebutDisplayData => ({
  ...VTuberBasicToDisplay(e),
  debutDate: e.debutDate,
  isToday: e.debutDate === todayDate,
});
