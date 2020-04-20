module.exports = {
  plugins: ["@typescript-eslint", "eslint-comments", "promise"],
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {
    "no-prototype-builtins": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
  },
}
