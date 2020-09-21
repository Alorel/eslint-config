module.exports = {
  parserOptions: {
    jsx: true
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  settings: {
    react: {
      pragma: 'h',
      version: '16.0'
    }
  },
  rules: {
    /**
     * Preact / JSX rules
     */
    'react/no-deprecated': 2,
    'react/react-in-jsx-scope': 0, // handled this automatically
    'react/display-name': [1, { ignoreTranspilerName: false }],
    'react/jsx-no-bind': [1, {
      ignoreRefs: true,
      allowFunctions: true,
      allowArrowFunctions: true
    }],
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
    'react/jsx-uses-react': 2, // debatable
    'react/jsx-uses-vars': 2,
    'react/self-closing-comp': 2,
    'react/prefer-es6-class': 2,
    'react/prefer-stateless-function': 1,
    'react/require-render-return': 2,
    'react/no-danger': 1,
    // Legacy APIs not supported in Preact:
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-string-refs': 2,

    /**
     * Preact stylistic rules (disabled):
     */
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-curly-spacing': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-equals-spacing': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-pascal-case': 0,
    'react/jsx-wrap-multilines': 0,

    /**
     * Hooks
     */
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  }
};
