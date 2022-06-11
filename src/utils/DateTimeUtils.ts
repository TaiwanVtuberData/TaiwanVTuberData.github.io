// Date.prototype.getTimezoneOffset() returns offset in minutes
// in UTC+8 the value will be -480
const hourOffsetFromDateAPI = (minutes: number): number => minutes / 60;

const prefixZero = (num: number): string => num.toString().padStart(2, '0');

export const getISODateString = (
  date: Date,
  timezoneHourDiff: number
): string => {
  const hourOffsetFromUTC =
    hourOffsetFromDateAPI(date.getTimezoneOffset()) + timezoneHourDiff;
  date.setTime(date.getTime() + hourOffsetFromUTC * 60 * 60 * 1000);
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
): number =>
  array
    .map((e) => e.startTime.getTime() - targetTime.getTime())
    .findIndex((value) => value >= 0);
