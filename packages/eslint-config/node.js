'use strict'

module.exports = {
  extends: ['plugin:node/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'node/exports-style': ['error', 'module.exports'],
  },
}
