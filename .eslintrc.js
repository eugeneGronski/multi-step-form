exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        arguments: true,
        attributes: true,
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'import', 'jsx-a11y', '@typescript-eslint'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
}
