module.exports = {
  ignoreFiles: ["dist", "node_modules"],
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
  ],
};
