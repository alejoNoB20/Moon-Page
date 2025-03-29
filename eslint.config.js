import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginTailwind from 'eslint-plugin-tailwindcss';

export default [
...eslintPluginAstro.configs.recommended,
{
    files: ['*.astro'],
    rules: {
    "astro/no-set-html-directive": "error"
    }
},
{
    files: ['*.jsx', '*.js'],
    extends: [
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended'
    ],
    rules: {
    "react/prop-types": "off",
    "tailwindcss/classnames-order": "warn"
    }
}
];