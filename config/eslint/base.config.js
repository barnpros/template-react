module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "@barnpros/eslint-config",
    "@barnpros/eslint-config/typescript",
    "@barnpros/eslint-config/react",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  ignorePatterns: [
    "dist",
    "src/generated",
    "serviceWorker.ts",
    "*.svg",
    "*.d.ts",
  ],
  rules: {
    "max-len": "off",
    "no-restricted-syntax": "off",
    "import/prefer-default-export": "off",
    "no-console": [
      "warn",
      {
        allow: ["info", "warn", "error"],
      },
    ],
  },
  overrides: [
    {
      files: ["cypress/integration/**/*"],
      extends: ["@barnpros/eslint-config/cypress"],
    },
    {
      files: ["src/**/*.test.*"],
      extends: ["@barnpros/eslint-config/jest"],
    },
  ],
};
