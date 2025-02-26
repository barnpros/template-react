module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-case": [
      2,
      "always",
      ["lowerCase", "start-case", "pascal-case", "camel-case"],
    ],
    "subject-case": [2, "never", ["start-case", "pascal-case"]],
  },
};
