import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  {
    ignores: ['dist/**', '.astro/**', '.vercel/**', 'node_modules/**'],
  },
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
];
