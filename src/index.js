module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  extends: [
    'eslint:recommended',
  ],
  plugins: [
    'import',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
          '.vue',
        ],
      },
    },
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  rules: {
    // 使用两个空格缩进
    'indent': [2, 2, { SwitchCase: 1 }],

    // 禁止空块语句，除了 catch
    'no-empty': [2, { allowEmptyCatch: true }],

    // 字符串使用单引号，允许使用反勾号
    'quotes': [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    // 行末无分号，必须出现分号时，应在行首
    'semi': [2, 'never'],
    'semi-style': [2, 'first'],

    // 花括号之间有空格
    'object-curly-spacing': [2, 'always'],

    // 允许: if (false) return
    'curly': [2, 'multi-line'],

    // 允许: fn && fn()
    'no-unused-expressions': [2, { allowShortCircuit: true }],

    // 允许注释以小写字母打头
    'capitalized-comments': 0,

    // 允许使用较短的符号实现类型转换
    'no-implicit-coercion': 0,

    // 允许返回赋值，但必须用括号包裹
    'no-return-assign': [2, 'except-parens'],

    // 允许 any == null 或 any != null
    'no-eq-null': 0,
    'eqeqeq': [2, 'allow-null'],

    // 不允许使用 var
    'no-var': 2,

    // 优先使用 const
    'prefer-const': 2,

    // 优先使用模板字符串
    'prefer-template': 2,

    // 操作符放前面
    'operator-linebreak': [2, 'before'],

    // 允许 console
    'no-console': 0,

    // 数组或对象多行时应有拖尾逗号
    'comma-dangle': [2, 'always-multiline'],

    // 如果数组元素内或元素间有换行，则要求换行
    'array-bracket-newline': [2, 'consistent'],

    // 在逗号后面使用空格
    'comma-spacing': [2, { before: false, after: true }],

    // 键及其值之间只能有一个空格
    'key-spacing': 2,

    // 关键字前后使用一致的空格
    'keyword-spacing': 2,

    // 类成员之间出现空行
    'lines-between-class-members': 2,

    // 禁用行尾空格
    'no-trailing-spaces': 2,

    // 如果有属性名称要求使用引号，则所有的属性名称都要使用引号；否则，禁止所有的属性名称使用引号
    'quote-props': [2, 'consistent-as-needed'],

    // 语句块之前应有空格
    'space-before-blocks': 2,

    // 函数圆括号之前有一个空格
    'space-before-function-paren': [2, {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    // 中缀操作符周围有空格
    'space-infix-ops': [2, { int32Hint: false }],

    // 箭头函数周围应有空格
    'arrow-spacing': 2,

    // 禁止出现多个空格
    'no-multi-spaces': 2,

    // 禁止块内填充
    'padded-blocks': [2, 'never'],

    //  强制圆括号内没有空格
    'space-in-parens': [2, 'never'],

    // 要求构造函数首字母大写
    'new-cap': 2,

    // JSX 单引号
    'jsx-quotes': [2, 'prefer-single'],

    // 文件末尾保留一行空行
    'eol-last': [2, 'always'],

    // 允许空一行
    'no-multiple-empty-lines': [2, {
      max: 1,
      maxBOF: 0,
      maxEOF: 0,
    }],

    // 使用 \n 换行
    'linebreak-style': [2, 'unix'],

    // 将对象的属性放在不同的行上，但允许将所有的放在一行上
    'object-property-newline': [2, { allowAllPropertiesOnSameLine: true }],

    // 如果在属性内部或属性之间有换行符，就要求有换行符
    'object-curly-newline': [2, { multiline: true }],

    // 如果函数的任一参数有换行，则要求在函数括号内换行。否则禁止换行
    'function-paren-newline': [2, 'consistent'],

    // 要求 Switch 语句中有 Default 分支
    'default-case': 2,

    // 禁止在 else 前有 return
    'no-else-return': 2,

    // 小数点前后应不为空
    'no-floating-decimal': 2,

    // new 规范化
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'new-parens': 2,

    // 禁用不必要的 return await
    'no-return-await': 2,

    // 禁止可以表达为更简单结构的三元操作符
    'no-unneeded-ternary': 2,

    // import
    'import/no-unresolved': 2,
    'import/no-cycle': 2,
    'import/first': 2,
    'import/order': [2, {
      'newlines-between': 'never',
      'groups': ['internal', 'builtin', 'external', 'parent', 'sibling', 'index'],
    }],
    'import/newline-after-import': 2,

    // 其他
    'no-control-regex': 0,
    'no-case-declarations': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: 'typescript-eslint-parser',
      plugins: [
        'typescript',
      ],
      rules: {
        'no-undef': 0,
        'no-unused-vars': 0,
        'typescript/class-name-casing': 2,
        'typescript/explicit-function-return-type': [2, { allowExpressions: true }],
        'typescript/member-delimiter-style': [2, {
          delimiter: 'comma',
          requireLast: true,
          ignoreSingleLine: true,
        }],
        'typescript/no-angle-bracket-type-assertion': 2,
        'typescript/type-annotation-spacing': 2,
        'typescript/explicit-member-accessibility': 2,
      },
    },
  ],
}
