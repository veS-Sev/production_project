module.exports= {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            // "files": [
            //     ".eslintrc.{js,cjs}"
            // ],
                  // enable the rule specifically for TypeScript files
      "files": [".eslintrc.{js,cjs}","*.ts", "*.mts", "*.cts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
      },
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "react/no-deprecated":"off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-floating-promises": "warn"
    }
}
