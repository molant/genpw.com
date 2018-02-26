const ERROR = 2;

module.exports = {
  env: {
    browser: true,
  },
  extends: ['@mi11er'],
  rules: {
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: true,
      },
    ],
  },
};
