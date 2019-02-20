module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true } ],
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    'operator-assignment': [0],
    'import/no-webpack-loader-syntax': [0],
    'global-require': [0],
  },
};
