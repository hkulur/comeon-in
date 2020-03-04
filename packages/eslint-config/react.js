'use strict'

module.exports = {
  parserOptions: {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  extends: ['plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-access-state-in-setstate': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-fragments': 'error',
    'react/jsx-handler-names': 'warn',
    'react/jsx-no-useless-fragment': 'error',
    'react/prefer-stateless-function': 'error',
  },
}
