module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:i18next/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      // "files": [
      //     ".eslintrc.{js,cjs}"
      // ],
      // enable the rule specifically for TypeScript files
      files: [
        ".eslintrc.{js,cjs}",
        "*.ts",
        "*.mts",
        "*.cts",
        "*.tsx",
        "**/src/**/*.test.{ts,tsx}",
        "**/src/**/*.stories.tsx",
        "scripts/generate-visual-json-report.js"
      ],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "i18next/no-literal-string": "off",
        "react/no-unescaped-entities": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/no-unsafe-argument": "warn",
        "@typescript-eslint/await-thenable": "off"
        
      },
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "i18next",
    "react-hooks"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "react/no-deprecated": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-floating-promises": "warn",
    "i18next/no-literal-string": [
      1,
      { markupOnly: true, ignoreAttribute: ["to"] },
    ],
    "react/display-name": "warn",
    "n/handle-callback-err": "off",
    "@typescript-eslint/consistent-type-imports": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  },
  globals: {
    __IS_DEV__: true,
  },
  ignorePatterns: [".eslintrc.js", "generate-visual-json-report.js","json-server/index.js"],
};


