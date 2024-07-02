# ESLint Config

> ESlint config for Vue 3 + TypeScript,NestJS.

## Usage

```bash
pnpm add @noahyu/eslint-config-vue -D

pnpm add @noahyu/eslint-config-nest -D

# Or yarn add -D / npm install -D
```

## Quick start

### Vue 3 + TypeScript

```bash
pnpm add @noahyu/eslint-config-vue
```

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

### NextJS

```bash
pnpm add @noahyu/eslint-config-nest
```

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
