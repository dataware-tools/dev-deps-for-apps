module.exports = {
  customSyntax: "postcss-syntax",
  plugins: [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-order",
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-prettier",
    "stylelint-config-styled-components",
  ],
  rules: {
    "declaration-block-no-shorthand-property-overrides": true,
    "selector-pseudo-element-colon-notation": "double",
    "declaration-block-trailing-semicolon": "never",
    "order/properties-alphabetical-order": true,
    "plugin/declaration-block-no-ignored-properties": true,
    // for material UI CSS in JS object style
    "selector-type-case": null,
    "selector-type-no-unknown": null,
    "rule-empty-line-before": null,
    "value-keyword-case": null,
    "property-no-unknown": null,
    "max-nesting-depth": 2,
    "font-family-no-missing-generic-family-keyword": null,
  },
  reportNeedlessDisables: true,
  reportInvalidScopeDisables: true,
};
