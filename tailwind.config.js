/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				skill: "0 3px 6px 0 rgba(0, 0, 0, 0.20)",
				card: "0 3px 6px 0 rgba(0, 0, 0, 0.30)",
			},
			gridTemplateColumns: {
				autofit: "repeat(auto-fit,minmax(18em,1fr))",
			},
		},
	},
	plugins: [],
}
