module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["**/dist/*", ".eslintrc.js"],
  root: true,
  env: {
    node: true,
    mocha: true,
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0,
  },
};
