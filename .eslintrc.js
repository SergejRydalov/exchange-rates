module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: [
          "tsconfig.*?.json"
        ],
        createDefaultProgram: true
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        "plugin:prettier/recommended"
      ],
    },
    {
      files: ["*.component.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
    },
    {
      files: ["*.html"],
      excludedFiles: ["*inline-template-*.component.html"],
      extends: ["plugin:prettier/recommended"],
      rules: {
        "prettier/prettier": ["error", {"parser": "angular"}]
      }
    }
  ],
}
