# @noahyu/eslint-config-nest

> ESlint config for NestJS

## Usage

```bash
pnpm add @noahyu/eslint-config-nest
```

## Quick start

```js
// eslint.config.mjs
import noahyuConfig from '@noahyu/eslint-config-nest'

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
