module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"no-mixed-spaces-and-tabs": 0,
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
	},
}
