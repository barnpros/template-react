/**
 * Husky runs scripts automatically at different stages
 * of the git lifecycle.
 *
 * This file must live in the root of the project for git to pick up the hooks.
 */
module.exports = {
  hooks: {
    "pre-commit": "yarn husky:pre-commit",
    "commit-msg": "yarn husky:commit-msg",
    "pre-push": "yarn husky:pre-push",
    "post-merge": "yarn husky:post-merge",
  },
};
