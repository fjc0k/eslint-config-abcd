module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
  ],
  plugins: [
    'sort-imports-es6-autofix',
    'import',
    'react',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx',
      ],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.json',
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
    'indent': [2, 2, {
      SwitchCase: 1,
      ignoredNodes: ['TemplateLiteral *'],
    }],

    // 禁止空块语句，除了 catch
    'no-empty': [2, {
      allowEmptyCatch: true,
    }],

    // 字符串使用单引号，允许使用反勾号
    'quotes': [2, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],

    // 行末无分号，必须出现分号时，应在行首
    'semi': [2, 'never'],
    'semi-style': [2, 'first'],

    // 允许: if (false) return
    'curly': [2, 'multi-line'],

    // 允许: fn && fn()
    'no-unused-expressions': [2, {
      allowShortCircuit: true,
    }],

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
    'comma-dangle': [2, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    // 如果数组元素内或元素间有换行，则要求换行
    'array-bracket-newline': [2, 'consistent'],

    // 在逗号后面使用空格
    'comma-spacing': [2, {
      before: false,
      after: true,
    }],

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
    'space-infix-ops': [2, {
      int32Hint: false,
    }],

    // 箭头函数周围应有空格
    'arrow-spacing': 2,

    // 禁止出现多个空格
    'no-multi-spaces': 2,

    // 禁止块内填充
    'padded-blocks': [2, 'never'],

    // 强制圆括号内没有空格
    'space-in-parens': [2, 'never'],

    // 强制中括号内没有空格
    'array-bracket-spacing': [2, 'never'],

    // 强制大括号内没有空格
    'object-curly-spacing': [2, 'never'],

    // 要求构造函数首字母大写，但不要求调用时前置 new 操作符
    'new-cap': [2, {
      newIsCap: true,
      capIsNew: false,
      properties: true,
    }],

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
    'object-property-newline': [2, {
      allowAllPropertiesOnSameLine: true,
    }],

    // 对象换行
    'object-curly-newline': [2, {
      consistent: true,
    }],

    // 函数参数换行
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

    // 大括号应在起始行开始，且允许一行
    'brace-style': [2, 'stroustrup', {
      allowSingleLine: true,
    }],

    // import
    'sort-imports-es6-autofix/sort-imports-es6': [2, {
      ignoreCase: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
    }],
    'import/no-unresolved': 2,
    'import/no-cycle': 2,
    'import/first': 0,
    'import/order': 0,
    'import/newline-after-import': 2,
    'import/prefer-default-export': 0,
    'import/no-commonjs': 0,

    // 其他
    'no-control-regex': 0,
    'no-case-declarations': 0,

    // react
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-uses-react': 2,
    'react/jsx-closing-bracket-location': [2, {
      selfClosing: 'line-aligned',
      nonEmpty: 'after-props',
    }],
    'react/jsx-boolean-value': [2, 'always'],
    'react/self-closing-comp': [2, {
      component: true,
      html: true,
    }],
    'react/jsx-closing-tag-location': 2,
    'react/jsx-filename-extension': [1, {
      extensions: ['.jsx', '.tsx'],
    }],
    'react/jsx-handler-names': [2, {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-curly-spacing': [2, {
      when: 'never',
      children: true,
    }],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-pascal-case': 2,
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': [2, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
    'react/jsx-key': 2,
    'react/no-array-index-key': 2,
    'react/react-in-jsx-scope': 2,
    'react/jsx-sort-props': [2, {
      callbacksLast: true,
      noSortAlphabetically: true,
      reservedFirst: true,
    }],
    'react/sort-comp': [2, {
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'getters',
        'setters',
        'lifecycle',
        'everything-else',
        '/^handle[A-Z].+$/',
        '/^render[A-Z].+$/',
        'render',
      ],
    }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint',
      ],
      rules: {
        'no-undef': 0,
        'brace-style': 0,
        '@typescript-eslint/brace-style': [2, 'stroustrup', {
          allowSingleLine: true,
        }],
        'comma-spacing': 0,
        '@typescript-eslint/comma-spacing': [2, {
          before: false,
          after: true,
        }],
        'indent': 0,
        '@typescript-eslint/indent': [2, 2, {
          SwitchCase: 1,
          ignoredNodes: ['TemplateLiteral *'],
        }],
        'no-dupe-class-members': 0,
        '@typescript-eslint/no-dupe-class-members': [2],
        'no-unused-expressions': 0,
        '@typescript-eslint/no-unused-expressions': [2, {
          allowShortCircuit: true,
        }],
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': [2, {
          argsIgnorePattern: '^_',
        }],
        'quotes': 0,
        '@typescript-eslint/quotes': [2, 'single', {
          avoidEscape: true,
          allowTemplateLiterals: true,
        }],
        'semi': 0,
        '@typescript-eslint/semi': [2, 'never'],
        'space-before-function-paren': 0,
        '@typescript-eslint/space-before-function-paren': [2, {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        }],
        '@typescript-eslint/adjacent-overload-signatures': 2,
        '@typescript-eslint/class-name-casing': 2,
        '@typescript-eslint/member-delimiter-style': [2, {
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
          multiline: {
            delimiter: 'comma',
            requireLast: true,
          },
        }],
        '@typescript-eslint/consistent-type-assertions': [2, {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'allow',
        }],
        '@typescript-eslint/type-annotation-spacing': 2,
      },
    },
  ],
}
