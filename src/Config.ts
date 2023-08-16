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

export const APP_VERSION = getEnvOrEmpty(process.env.APP_VERSION);
export const ROUTE_PREFIX = getEnvOrEmpty(process.env.GITHUB_PAGES);
export const GOOGLE_FORM_URL = getEnvOrEmpty(process.env.GOOGLE_FORM_URL);
export const GITHUB_ISSUE_URL = getEnvOrEmpty(process.env.GITHUB_ISSUE_URL);
export const CONTACT_EMAIL = getEnvOrEmpty(process.env.CONTACT_EMAIL);
export const ENFORCE_YOUTUBE_COMPLIANCE = getEnvAsBooleanOrFalse(
  process.env.ENFORCE_YOUTUBE_COMPLIANCE
);
