export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'alpha-value-notation': null,
    'color-function-alias-notation': null,
    'color-function-notation': null,
    'declaration-property-value-keyword-no-deprecated': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': true,
    'property-no-vendor-prefix': null,
    'selector-class-pattern': '^[a-z][a-z0-9\\-]*[a-z0-9]$',
    'selector-not-notation': null,
    'scss/no-global-function-names': null,
  },
};
