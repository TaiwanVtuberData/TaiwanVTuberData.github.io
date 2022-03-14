let basename = '';

if (process.env.GITHUB_PAGES) {
  basename = `/${process.env.GITHUB_PAGES}`;
}

export default basename;
