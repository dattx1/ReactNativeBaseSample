module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'sort-imports': [
          'error',
          {
            ignoreCase: true,
            ignoreDeclarationSort: true,
          },
        ],
        'import/order': [
          'error',
          {
            groups: [
              ['builtin', 'external'],
              'internal',
              ['sibling', 'parent'],
              'index',
              'object',
              'type',
            ],
            pathGroups: [
              {
                pattern: '@src/**',
                group: 'internal',
              },
            ],
            'newlines-between': 'always',
            warnOnUnassignedImports: true,
          },
        ],
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};
