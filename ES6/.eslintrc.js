module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: 'standard',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    BigInt: true
  },
  parserOptions: {
    ecmaVersion: 2019
  },
  rules: {
    // 必须在语句结尾使用分号
    semi: ['error', 'always'],
    // 函数参数的小括号前没有空格 function fn() {}
    'space-before-function-paren': ['error', 'never'],
    // 可以使用 console
    'no-console': 'off',
    // vue 中 html 代码自闭合
    'vue/html-self-closing': 'off'
  }
};
