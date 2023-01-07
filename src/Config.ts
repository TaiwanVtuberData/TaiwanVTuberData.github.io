const getEnvOrEmpty = (env: string | undefined): string => {
  let defaultValue = '';
  if (env) {
    defaultValue = env;
  }

  return defaultValue;
};

export const APP_VERSION = getEnvOrEmpty(process.env.APP_VERSION);
export const ROUTE_PREFIX = getEnvOrEmpty(process.env.GITHUB_PAGES);
export const GOOGLE_FORM_URL = getEnvOrEmpty(process.env.GOOGLE_FORM_URL);
export const GITHUB_ISSUE_URL = getEnvOrEmpty(process.env.GITHUB_ISSUE_URL);
