export type ValidCookieKey = 'locale' | 'nationality';

// https://fettblog.eu/typescript-array-includes/
function includes<T extends U, U>(coll: ReadonlyArray<T>, el: U): el is T {
  return coll.includes(el as T);
}

// not sure if it actually do type checking when T extends string
export const getCookie = <T extends string>(
  key: ValidCookieKey,
  validValues: ReadonlyArray<T>,
  defaultValue: T
): T => {
  // https://www.w3schools.com/js/js_cookies.asp
  const target = `${key}=` as const;

  // Preact cannot compile pre-render code using DOM or Web APIs.
  if (typeof window != 'undefined') {
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(target) == 0) {
        const parsedValue: string = c.substring(target.length, c.length);
        if (includes(validValues, parsedValue)) {
          return parsedValue;
        }

        return defaultValue;
      }
    }
    return defaultValue;
  }

  return defaultValue;
};

export const setCookie = <T extends string>(
  key: ValidCookieKey,
  validValues: ReadonlyArray<T>,
  value: T
): boolean => {
  if (!includes(validValues, value)) {
    return false;
  }

  document.cookie = `${key}=${value}; expires=2038-01-19T04:14:07Z; path=/`;
  return true;
};
