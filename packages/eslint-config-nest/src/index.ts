import { cwd } from 'node:process'

export = {
  env: {
    node: true,
    es2024: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: cwd(),
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'accessor-pairs': 'warn',
    'consistent-return': 'warn',
    curly: 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    eqeqeq: 'error',
    'no-template-curly-in-string': 'warn',
    'no-console': 'off',
    'no-alert': 'warn',
    'no-else-return': 'warn',
    'no-empty-function': 'off',
    'no-empty-pattern': 'warn',
    'no-unused-vars': 'off',
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  ignorePatterns: ['.eslintrc.js'],
}
