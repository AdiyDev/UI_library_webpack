const prettierConfig = require('./prettier.config')

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': ['error', { props: false }],
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/button-has-type': 'off',
    'no-debugger': 'warn',
    'no-alert': 'off',
    'no-use-before-define': 'off',
    camelcase: 'off',
    'prettier/prettier': ['error', prettierConfig],
    'arrow-body-style': ['off', 'never'],
    'react/function-component-definition': [
      'off',
      {
        namedComponents: 'function-declaration'
      }
    ],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'airbnb',
    'prettier'
  ],
  plugins: ['react', 'prettier']
}
