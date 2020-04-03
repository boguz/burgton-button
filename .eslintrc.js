module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // turn off warning about all methods needing to use "this"
    "class-methods-use-this": ["off"],

    // allow underscore on private methods
    "no-underscore-dangle": ["off"],

    // allow console warnings, warn of console logs
    "no-console": [1, { allow: ["warn", "error", "group", "groupCollapsed", "groupEnd", "table"] }]
  },
};
