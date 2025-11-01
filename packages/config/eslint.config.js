/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    // Add any custom ESLint rules here
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off'
  }
}