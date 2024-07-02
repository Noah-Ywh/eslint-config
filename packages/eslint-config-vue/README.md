# @noahyu/eslint-config-vue

> ESlint config for Vue 3 + TypeScript

## Usage

```bash
pnpm add @noahyu/eslint-config-vue
```

## Quick start

```js
// eslint.config.mjs
import noahyuConfig from '@noahyu/eslint-config-vue'

export default [
  ...noahyuConfig,
  // anything from here will override noahyuConfig
  {
    rules: {
      // ···
    },
  },
]
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023-present, Noah Yu
