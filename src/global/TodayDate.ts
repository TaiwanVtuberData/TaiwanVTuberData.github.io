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

const PAST_DATE = new Date(TODAY_DATE);
PAST_DATE.setDate(PAST_DATE.getDate() - 30);
const TODAY_DATE_MINUS_30_DAYS: Date = PAST_DATE;

export const TODAY_DATE_MINUS_30_DAYS_STRING: string = getISODateString(
  TODAY_DATE_MINUS_30_DAYS,
  TIMEZONE_DIFF_IN_HOUR,
);
