module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2020: true,
    jest: true  // Añade esta línea
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ["**/*.test.js", "**/*.spec.js"],
      env: {
        jest: true  // Esto habilita las variables globales de Jest
      },
      rules: {
        "no-unused-expressions": "off",
        "no-unused-vars": ["error", { "varsIgnorePattern": "^result$" }]  // Ignora la variable 'result' no usada
      }
    }
  ]
}