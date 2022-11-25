# React with TypeScript Vite Setup

## Initializing Project

```
npm create vite@latest my-app -- --template react-ts
cd my-app
git init
npm i
```

**References**

- [Vite - Getting Started](https://vitejs.dev/guide/)
- [npm - scripts](https://docs.npmjs.com/cli/v9/using-npm/scripts)

## Testing Library

```
npm install vitest --save-dev
```

`package.json`

```json
...
  "scripts": {
    ...
    "test": "vitest"
  },
...
```

```
npm install jsdom --save-dev
npm install @testing-library/react @testing-library/jest-dom --save-dev
```

`testSetup.ts`

```ts
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
```

`vite.config.ts`

```ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './testSetup.ts'
  }
})
```

## ESLint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

```
npm i -D eslint eslint-plugin-react @typescript-eslint/eslint-plugin eslint-plugin-jsx-a11y
```

`.eslintrc.cjs`

```cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off', // !
    '@typescript-eslint/no-extra-non-null-assertion': 'off', // !!
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    'no-async-promise-executor': 'off',
    'no-extra-boolean-cast': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
```

`.eslintignore`

```
# don't ever lint node_modules
node_modules
node_modules/*

# don't lint build output (make sure it's set to your correct build folder name)
dist
build

# don't lint nyc coverage output
coverage
src/serviceWorker.ts
```

`package.json`

```json
...
  "scripts": {
    ...
    "lint:fix": "eslint '*/**/*.{js,ts,tsx}' --fix",
    "lint": "eslint '*/**/*.{js,ts,tsx}'"
  },
...
```

**References**

- [npm - eslint](https://www.npmjs.com/package/eslint)

## Prettier

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

```
npm i -D prettier
```

`.prettierrc`

```json
{
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all"
}
```

`.prettierignore`

```
build
dist
coverage
```

`package.json`

```json
...
  "scripts": {
    ...
    "tidy": "prettier '*/**/*.{js,ts,tsx,json,md,html}' --write"
  },
...
```

**References**

- [npm - prettier](https://www.npmjs.com/package/prettier)

## ESLint vs Prettier

[Source](https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/#managing-eslint-rules-avoid-conflict-prettier)

## Husky

```
npm i -D husky
npm pkg set scripts.prepare="husky install"
npm run prepare
npx husky add .husky/pre-commit "npm run tidy && npm run lint && npx vitest --watch=false --silent --passWithNoTests"
```

`.husky/pre-commit`

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run tidy && npm run lint && npx vitest --watch=false --silent --passWithNoTests
```

**References**

- [npm - husky](https://www.npmjs.com/package/husky)
- [git - Customizing Git - Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
- [Altlassian - Git Hooks](https://www.atlassian.com/git/tutorials/git-hooks)


https://www.robinwieruch.de/vitest-react-testing-library/