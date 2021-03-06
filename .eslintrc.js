// .eslintrc.js
module.exports = {    
  root: true,    
  env: {      
    node: true,    
  },    
  extends: [      
    'plugin:vue/essential',    
  ],    
  plugins: ['vue'],    
  parserOptions: {      
    parser: 'babel-eslint',    
  },    
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-bitwise': 'off',
    'no-tabs': 'off',
    'array-element-newline': ['error', 'consistent'],
    indent: ['error', 2, { MemberExpression: 0, SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', 1000],
    'no-new': 'off',
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'eol-last': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'warn',
    'import/no-cycle': 'off',
    'arrow-parens': 'off',
    semi: ['error', 'never'],
    eqeqeq: 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'no-continue': 'off',
    'prefer-destructuring': 'off',
    'no-plusplus': 'off',
    'prefer-const': 'off',
    'global-require': 'off',
    'no-prototype-builtins': 'off',
    'consistent-return': 'off',
    'vue/require-component-is': 'off',
    'vue/multi-word-component-names': 0,
    'prefer-template': 'off',
    'one-var-declaration-per-line': 'off',
    'one-var': 'off',
    'import/named': 'off',
    'object-curly-newline': 'off',
    'default-case': 'off',
    'import/order': 'off',
    'no-trailing-spaces': 'off',
    'func-names': 'off',
    radix: 'off',
    'no-unused-expressions': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'no-restricted-syntax': 'off',
    'no-mixed-operators': 'off',
    'no-await-in-loop': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-case-declarations': 'off',
    'template-curly-spacing': 'off',
    'vue/valid-v-for': 'off',
    'no-empty': 'off',
    'guard-for-in': 'off',
    // ??????????????????
    // ????????????????????????????????????
    // ?????????this??????alias
    // ????????????any??????
    'class-methods-use-this': 'off',
    'no-return-await': 'off',
    'vue/html-indent': ['error', 4],
    'vue/html-self-closing': 'off',
    // 'vue/max-attributes-per-line': ['warn', {
    //     singleline: {
    //         max: 3,
    //         allowFirstLine: true,
    //     }
    // }],
    'vue/singleline-html-element-content-newline': 'off',
  },  
}
