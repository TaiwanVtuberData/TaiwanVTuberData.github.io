export default {
  webpack(config, env, helpers, options) {

    const publicPath = process.env.GITHUB_PAGES
      ? `/${process.env.GITHUB_PAGES}/`
      : '/';

      config.output.publicPath = publicPath;

    const ghEnv = process.env.GITHUB_PAGES
      && JSON.stringify(`${process.env.GITHUB_PAGES}`);

    const versionEnv = process.env.npm_package_version
      && JSON.stringify(`${process.env.npm_package_version}`);

    const googleFormEnv = process.env.GOOGLE_FORM_URL
      && JSON.stringify(`${process.env.GOOGLE_FORM_URL}`);

    // GitHub doesn't allow env that starts with GITHUB_
    const gitHubIssueEnv = process.env._P_GITHUB_ISSUE_URL
        && JSON.stringify(`${process.env._P_GITHUB_ISSUE_URL}`);

    const timezoneDiffInHour = process.env.TIMEZONE_DIFF_IN_HOUR
    && JSON.stringify(`${process.env.TIMEZONE_DIFF_IN_HOUR}`);

    const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0];
    Object.assign(
      plugin.definitions,
      { 
        'process.env.GITHUB_PAGES': ghEnv, 
        'process.env.APP_VERSION': versionEnv, 
        'process.env.GOOGLE_FORM_URL': googleFormEnv, 
        'process.env.GITHUB_ISSUE_URL': gitHubIssueEnv, 
        'process.env.TIMEZONE_DIFF_IN_HOUR': timezoneDiffInHour, 
      }
    );

  },
};
