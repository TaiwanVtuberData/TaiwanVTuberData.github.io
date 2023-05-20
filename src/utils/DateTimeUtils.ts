// Date.prototype.getTimezoneOffset() returns offset in minutes
// in UTC+8 the value will be -480
const hourOffsetFromDateAPI = (minutes: number): number => minutes / 60;

const prefixZero = (num: number): string => num.toString().padStart(2, '0');

const getDateAfterTimezoneAdjustment = (
  time: Date,
  timezoneHourDiff: number
): Date => {
  const hourOffsetFromUTC =
    hourOffsetFromDateAPI(time.getTimezoneOffset()) + timezoneHourDiff;
  time.setTime(time.getTime() + hourOffsetFromUTC * 60 * 60 * 1000);

  return time;
};

export const getISODateString = (
  time: Date,
  timezoneHourDiff: number
): string => {
  const date = getDateAfterTimezoneAdjustment(time, timezoneHourDiff);
  // ECMAScript defines month as 0 to 11
  return (
    // eslint(prefer-template) suggests
    // `${date.getFullYear()  }-${  prefixZero(date.getMonth() + 1)  }-${  prefixZero(date.getDate())}`
    // which is not really readable tbh
    date.getFullYear() +
    '-' +
    prefixZero(date.getMonth() + 1) +
    '-' +
    prefixZero(date.getDate())
  );
};

export const getFormattedDateTime = (date: Date): string => {
  return (
    date.getFullYear() +
    '-' +
    prefixZero(date.getMonth() + 1) +
    '-' +
    prefixZero(date.getDate()) +
    ' ' +
    prefixZero(date.getHours()) +
    ':' +
    prefixZero(date.getMinutes()) +
    ':' +
    prefixZero(date.getSeconds())
  );
};

export const getFormattedTime = (date: Date): string => {
  return (
    prefixZero(date.getHours()) +
    ':' +
    prefixZero(date.getMinutes()) +
    ':' +
    prefixZero(date.getSeconds())
  );
};

const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const getFormattedTimeIfNotToday = (date: Date, today: Date): string => {
  if (isSameDay(date, today)) {
    return getFormattedTime(date);
  }

  return getFormattedDateTime(date);
};

export const findClosestSortedDateIndex = (
  array: Array<{ startTime: Date }>,
  targetTime: Date
): number => {
  const closest: number = array
    .map((e) => e.startTime.getTime() - targetTime.getTime())
    .findIndex((value) => value >= 0);

  if (closest < 0) {
    return array.length - 1;
  }

  return closest;
};

// https://stackoverflow.com/a/15289883
export const dateDiffInDays = (a: Date, b: Date): number => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

export const dateStringToDate = (
  dateString: string,
  timezoneHourDiff: number
): Date => {
  const currentDate = new Date(dateString);

  return getDateAfterTimezoneAdjustment(currentDate, timezoneHourDiff);
};
