import { tryParseInteger } from './utils/NumberUtils';

const getEnvOrEmpty = (env: string | undefined): string => {
  let defaultValue = '';
  if (env) {
    defaultValue = env;
  }

  return defaultValue;
};

const getEnvAsBooleanOrFalse = (env: string | undefined): boolean => {
  const envValue = getEnvOrEmpty(env);

  return envValue === 'true';
};

const DEFAULT_TIMEZONE_DIFF_IN_HOUR = 8;

export const APP_VERSION = getEnvOrEmpty(import.meta.env.APP_VERSION);
export const CONTACT_EMAIL = getEnvOrEmpty(import.meta.env.CONTACT_EMAIL);
export const ENFORCE_YOUTUBE_COMPLIANCE = getEnvAsBooleanOrFalse(
  import.meta.env.ENFORCE_YOUTUBE_COMPLIANCE,
);
export const GITHUB_ISSUE_URL = getEnvOrEmpty(import.meta.env.GITHUB_ISSUE_URL);
export const GOOGLE_FORM_URL = getEnvOrEmpty(import.meta.env.GOOGLE_FORM_URL);
export const ROUTE_PREFIX = getEnvOrEmpty(import.meta.env.ROUTE_PREFIX);
export const TIMEZONE_DIFF_IN_HOUR: number = tryParseInteger(
  import.meta.env.TIMEZONE_DIFF_IN_HOUR,
  DEFAULT_TIMEZONE_DIFF_IN_HOUR,
);
export const ENABLE_ADVERTISEMENT = getEnvAsBooleanOrFalse(
  import.meta.env.ENABLE_ADVERTISEMENT,
);
export const ENABLE_YEAR_END_STATISTIC = getEnvAsBooleanOrFalse(
  import.meta.env.ENABLE_YEAR_END_STATISTIC,
);
