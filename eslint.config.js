import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // 1. Global ignores
  {
    ignores: [
      'node_modules/',
      'dist/',
      '.vscode/',
    ],
  },

  // 2. Core ESLint recommended rules
  js.configs.recommended,

  // 3. TypeScript configuration
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...tseslint.configs['recommended'].rules,

      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-vars': 'off',
    },
  },

  // 4. Prettier configuration (Turns off conflicting rules)
  // IMPORTANT: This must come AFTER other rules configs like TypeScript
  eslintConfigPrettier, // Add Prettier config to disable conflicting rules
];