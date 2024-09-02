const globals = require("globals");
const pluginJs = require("@eslint/js");

module.exports = [
  {
    files: ["**/*.js", "**/*.cjs"], // Inclui arquivos .js e .cjs
    languageOptions: {
      sourceType: "commonjs", // CommonJS para require/module.exports
      ecmaVersion: "latest", // Define a versão do ECMAScript
      globals: {
        ...globals.node, // Inclui variáveis globais do Node.js, como `process`
      },
    },
  },
  {
    ignores: ['**/*.test.js'], // Ignora arquivos de teste
  },
  pluginJs.configs.recommended, // Configurações recomendadas do ESLint
];
