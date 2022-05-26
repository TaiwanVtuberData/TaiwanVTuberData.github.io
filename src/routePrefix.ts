let routePrefix = '';

if (process.env.GITHUB_PAGES) {
  routePrefix = `/${process.env.GITHUB_PAGES}`;
}

export default routePrefix;
