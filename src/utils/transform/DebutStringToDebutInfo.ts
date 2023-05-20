import {
  TIMEZONE_DIFF_IN_HOUR,
  TODAY_DATE,
  TODAY_DATE_STRING,
} from '../../global/TodayDate';
import { DebutInfo, HasDebutInfo } from '../../types/DebutInfo';
import { dateDiffInDays, dateStringToDate } from '../DateTimeUtils';

export const maybeDebutStringToDebutInfo = (
  debutString?: string
): DebutInfo => {
  if (debutString === null || debutString === undefined)
    return { hasDebutInfo: false };

  return {
    hasDebutInfo: true,
    debutDate: debutString,
    isToday: debutString === TODAY_DATE_STRING,
    isRecentlyDebut:
      dateDiffInDays(
        TODAY_DATE,
        dateStringToDate(debutString, TIMEZONE_DIFF_IN_HOUR)
      ) < 30,
  };
};

export const debutStringToDebutInfo = (debutString: string): HasDebutInfo => {
  return {
    hasDebutInfo: true,
    debutDate: debutString,
    isToday: debutString === TODAY_DATE_STRING,
    isRecentlyDebut:
      dateDiffInDays(
        TODAY_DATE,
        dateStringToDate(debutString, TIMEZONE_DIFF_IN_HOUR)
      ) < 30,
  };
};
