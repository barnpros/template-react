/**
 * Husky runs scripts automatically at different stages
 * of the git lifecycle.
 */
module.exports = {
  hooks: {
    "pre-commit": "yarn husky:pre-commit",
    "commit-msg": "yarn husky:commit-msg",
    "pre-push": "yarn husky:pre-push",
    "post-merge": "yarn husky:post-merge",
  },
};
