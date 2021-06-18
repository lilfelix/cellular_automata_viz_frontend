module.exports = {
	root: true,
	/**
	* Tells ESLint to use the parser package you installed (@typescript-eslint/parser).
	* This allows ESLint to understand TypeScript syntax.
	* This is required, or else ESLint will throw errors as it tries to parse TypeScript code as if it were regular JavaScript.
	*/
	parser: '@typescript-eslint/parser',
	/**
	* Tells ESLint to load the plugin package you installed (@typescript-eslint/eslint-plugin).
		* This allows you to use the rules within your codebase.
	 */
	plugins: [
		'@typescript-eslint',
		'jest',
	],
	extends: [
		'airbnb-typescript',
		'prettier',
		'plugin:jest/recommended',
	],
};