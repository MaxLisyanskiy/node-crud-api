import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

import { defineConfig, globalIgnores } from 'eslint/config'

/** @type {import('eslint').Linter.Config[]} */
// export default [

// ]

export default defineConfig([
  globalIgnores(['dist/**/*', 'docs/**/*']),
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier
])
