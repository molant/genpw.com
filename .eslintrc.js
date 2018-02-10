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
    'no-param-reassign': [ERROR, { props: false }],
    'valid-jsdoc': [ERROR],
  },
};
