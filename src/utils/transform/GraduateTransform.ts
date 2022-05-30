import { VTuberGraduateData } from '../../types/ApiData/VTuberGraduateData';
import { VTuberGraduateDisplayData } from '../../types/TableDisplayData/VTuberGraduateDisplayData';
import { VTuberBasicToDisplay } from './BasicTransform';

export const VTuberGraduateToDisplay = (
  e: VTuberGraduateData,
  todayDate: string
): VTuberGraduateDisplayData => ({
  ...VTuberBasicToDisplay(e),
  graduateDate: e.graduateDate,
  isToday: e.graduateDate === todayDate,
});
