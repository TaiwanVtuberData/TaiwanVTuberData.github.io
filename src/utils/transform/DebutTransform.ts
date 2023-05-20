import {
  TIMEZONE_DIFF_IN_HOUR,
  TODAY_DATE,
  TODAY_DATE_STRING,
} from '../../global/TodayDate';
import { VTuberDebutData } from '../../types/ApiData/VTuberDebutData';
import { VTuberDebutDisplayData } from '../../types/TableDisplayData/VTuberDebutDisplayData';
import { dateDiffInDays, dateStringToDate } from '../DateTimeUtils';
import { VTuberBasicToDisplay } from './BasicTransform';

export const VTuberDebutToDisplay = (
  e: VTuberDebutData
): VTuberDebutDisplayData => ({
  ...VTuberBasicToDisplay(e),
  debutDate: e.debutDate,
  isToday: e.debutDate === TODAY_DATE_STRING,
  isRecentlyDebut:
    dateDiffInDays(
      TODAY_DATE,
      dateStringToDate(e.debutDate, TIMEZONE_DIFF_IN_HOUR)
    ) < 30,
});
