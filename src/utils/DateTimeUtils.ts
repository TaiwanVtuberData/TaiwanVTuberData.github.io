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
