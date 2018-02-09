const ERROR = 2;

module.exports = {
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  rules: {

    'valid-jsdoc': [
      ERROR,
    ],
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: true,
      },
    ],
  },
};
