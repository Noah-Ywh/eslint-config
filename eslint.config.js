import noahyuConfig from './packages/eslint-config-vue/dist/index.js'

export default [
  /** 全局忽略 */
  {
    ignores: ['changelog.config.js', 'commitlint.config.js', '**/*/.nuxt/', '**/*/dist', '.*/'],
  },

  ...noahyuConfig,

  {
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
]
