import { getISODateString } from '../utils/DateTimeUtils';

export const TIMEZONE_DIFF_IN_HOUR = 8;

export const TODAY_DATE: Date = new Date();

export const TODAY_DATE_STRING: string = getISODateString(TODAY_DATE, 8);
