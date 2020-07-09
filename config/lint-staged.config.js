module.exports = {
  "package.json": "yarn lint-staged:package-json",
  "*.js": ["yarn lint-staged:prettier"],
  "src/**/*.{ts,tsx}": [
    "yarn lint-staged:imports",
    "yarn lint-staged:prettier",
    "yarn lint-staged:eslint",
    "yarn lint-staged:jest",
  ],
  "src/**/*.style.tsx": [
    "yarn lint-staged:imports",
    "yarn lint-staged:prettier",
    "yarn lint-staged:eslint",
    "yarn lint-staged:stylelint",
    "yarn lint-staged:jest",
  ],
  "src/**/*.{graphql,json,md,yml}": ["yarn lint-staged:prettier"],
};
