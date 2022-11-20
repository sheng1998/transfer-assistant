module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 关闭禁止使用 ts 注释的校验
    '@typescript-eslint/ban-ts-comment': 'off',
    // 忽略检测换行风格
    'linebreak-style': 'off',
    // 关闭 vue 组件文件名必需要是 multi 格式校验(建议不要这么做)
    'vue/multi-word-component-names': 'off',
    // 函数体修改函数参数
    'no-param-reassign': 'off',
    'operator-linebreak': ['error', 'after'],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    camelcase: 'off',
    'implicit-arrow-linebreak': 'off',
    'no-unused-vars': 'off',
    'no-continue': 'off',
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'default-case': 'off',
  },
};
