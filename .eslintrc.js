const path = require("path");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ["plugin:prettier/recommended", "plugin:gridsome/recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  plugins: ["gridsome"]
};
