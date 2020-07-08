module.exports = {
  rootDir: "../../",
  collectCoverageFrom: ["./src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  setupFiles: ["react-app-polyfill/jsdom"],
  setupFilesAfterEnv: ["./config/jest/setupTests.js"],
  testEnvironment: "jest-environment-jsdom-fourteen",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "./node_modules/babel-jest",
    "^.+\\.css$": "./config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "./config/jest/fileTransform.js",
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$"],
  modulePaths: [],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
  },
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
