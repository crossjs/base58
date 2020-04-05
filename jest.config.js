module.exports = {
  verbose: true,
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "^.+\\.(js|ts)$": "babel-jest",
  },
  testMatch: ["<rootDir>/test/**/*.(spec|test).ts"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageReporters: ["lcov", "text-summary"],
  coverageDirectory: "coverage",
};
