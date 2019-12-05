module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    AMap: true,
    EZUIPlayer: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'space-before-function-paren': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
