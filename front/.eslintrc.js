module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript'
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json'
	},
	plugins: [
		'react'
	],
	rules: {
		// --------------------- common
		'array-bracket-spacing': [ 'error', 'always' ],
		indent: [ 'error', 'tab' ],
		'no-tabs': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		// --------------------- react
		'react/react-in-jsx-scope': 'off',
		// --------------------- typescript
		'@typescript-eslint/explicit-function-return-type': 'warn',
		'@typescript-eslint/no-confusing-void-expression': 'warn',
		'@typescript-eslint/indent': [ 'error', 'tab' ],
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off'
	}
}
