'use strict';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { ie: '11' },
        modules: false,
        exclude: ['transform-typeof-symbol'],
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties'],
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
  ],
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-typescript'],
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
};
