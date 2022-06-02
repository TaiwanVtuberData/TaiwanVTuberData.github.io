let AppVersion = '';

if (process.env.APP_VERSION) {
  AppVersion = process.env.APP_VERSION;
}

export default AppVersion;
