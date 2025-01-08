import { TIMEZONE_DIFF_IN_HOUR } from '../../Config';
import { TODAY_DATE, TODAY_DATE_STRING } from '../../global/TodayDate';
import {
  AnniversaryDebutInfo,
  DebutInfo,
  HasDebutInfo,
} from '../../types/DebutInfo';
import { dateDiffInDays, dateStringToDate } from '../DateTimeUtils';

export const maybeDebutStringToDebutInfo = (
  debutString: string | null,
): DebutInfo => {
  if (debutString === null || debutString === undefined)
    return { hasDebutInfo: false };

  return debutStringToDebutInfo(debutString);
};

export const debutStringToDebutInfo = (debutString: string): HasDebutInfo => {
  return {
    hasDebutInfo: true,
    debutDate: debutString,
    isToday: debutString === TODAY_DATE_STRING,
    isRecentlyDebut:
      dateDiffInDays(
        dateStringToDate(debutString, TIMEZONE_DIFF_IN_HOUR),
        TODAY_DATE,
      ) < 30,
  };
};

export const debutOfTheYearStringToAnniversaryDebutInfo = (
  debutString: string,
  debutOfTheYearString: string,
): AnniversaryDebutInfo => {
  return {
    hasDebutInfo: true,
    debutDate: debutString,
    debutDateOfTheYear: debutOfTheYearString,
    isToday: debutString === TODAY_DATE_STRING,
    isRecentlyDebut:
      dateDiffInDays(
        dateStringToDate(debutString, TIMEZONE_DIFF_IN_HOUR),
        TODAY_DATE,
      ) < 30,
  };
};
