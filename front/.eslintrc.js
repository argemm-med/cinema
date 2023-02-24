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
		'array-bracket-spacing': [ 'error', 'always' ],
		indent: [ 'error', 'tab' ],
		'no-tabs': 0,
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-function-return-type': 1,
		'@typescript-eslint/indent': [ 'error', 'tab' ],
		'@typescript-eslint/prefer-nullish-coalescing': 0,
		'@typescript-eslint/strict-boolean-expressions': 0,
		'react/jsx-indent': [ 'error', 'tab' ],
		'react/jsx-indent-props': [ 'error', 4 ]
	}
}
