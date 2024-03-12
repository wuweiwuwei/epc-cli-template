module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',

    'plugin:@typescript-eslint/recommended',
    './.eslintrc-auto-import.json'
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: { '@': './src' }
      }
    }
  },
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-var-requires': 0, //解决报错：Require statement not part of import statement.
<<<<<<< HEAD
    "@typescript-eslint/no-explicit-any": ["off"],
    'vue/multi-word-component-names': 'off' //关闭组件命名规则娇艳
    
=======
    'vue/multi-word-component-names': 'off' //关闭组件命名规则娇艳
>>>>>>> 4603f4cdb269f3726905af56ad1db8773ed5b612
  },
  root: true
}
