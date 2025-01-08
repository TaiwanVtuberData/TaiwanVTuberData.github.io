import { TIMEZONE_DIFF_IN_HOUR } from '../Config';
import {
  getDateAfterTimezoneAdjustment,
  getISODateString,
} from '../utils/DateTimeUtils';

export const TODAY_DATE: Date = getDateAfterTimezoneAdjustment(
  new Date(),
  TIMEZONE_DIFF_IN_HOUR,
);

export const TODAY_DATE_STRING: string = getISODateString(
  TODAY_DATE,
  TIMEZONE_DIFF_IN_HOUR,
);
