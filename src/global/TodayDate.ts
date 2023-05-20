import {
  getDateAfterTimezoneAdjustment,
  getISODateString,
} from '../utils/DateTimeUtils';
import { tryParseInteger } from '../utils/NumberUtils';

const DEFAULT_TIMEZONE_DIFF_IN_HOUR = 8;

export const TIMEZONE_DIFF_IN_HOUR: number = tryParseInteger(
  process.env.TIMEZONE_DIFF_IN_HOUR,
  DEFAULT_TIMEZONE_DIFF_IN_HOUR
);

export const TODAY_DATE: Date = getDateAfterTimezoneAdjustment(
  new Date(),
  TIMEZONE_DIFF_IN_HOUR
);

export const TODAY_DATE_STRING: string = getISODateString(
  TODAY_DATE,
  TIMEZONE_DIFF_IN_HOUR
);
