import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['assets/js/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        clearTimeout: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        navigator: 'readonly',
        setTimeout: 'readonly',
      },
    },
  },
];
