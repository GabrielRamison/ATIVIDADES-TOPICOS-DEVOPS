module.exports = {
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  
  moduleNameMapper: {
     "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {},
};
