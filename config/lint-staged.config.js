module.exports = {
  "package.json": "yarn lint-staged:package-json",
  "*.js": ["yarn lint-staged:prettier"],
  "**/*.{graphql,json,md,yml}": ["yarn lint-staged:prettier"],
  "src/**/*.{ts,tsx}": [
    "yarn lint-staged:imports",
    "yarn lint-staged:prettier",
    "yarn lint-staged:eslint",
    "yarn lint-staged:jest",
  ],
  // The `style.tsx` files are only assigned the stylelint job because they also
  // inherit all jobs from the `{ts,tsx}` block.
  "src/**/*.style.tsx": ["yarn lint-staged:stylelint"],
};
