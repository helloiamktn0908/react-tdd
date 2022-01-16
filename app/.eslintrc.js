module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: [
    ".eslintrc.js"
  ],
  rules: {
    'no-use-before-define': "off",
    "@typescript-eslint/no-use-before-define": "off",
    'import/prefer-default-export': "off",
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    'object-curly-spacing': 2,
    'no-multi-spaces': 2,
    'comma-spacing': 2,
    'key-spacing': 2,
    'react/jsx-indent': [2, 2],
    'max-len': ['error', { 'code': 80 }],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single']
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
    },
  },
};
