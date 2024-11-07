const nxEslintPlugin = require('@nx/eslint-plugin');

module.exports = [
  { plugins: { '@nx': nxEslintPlugin } },
  {
    rules: {
      'attr-lowercase': 'off',
      'doctype-first': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
];
