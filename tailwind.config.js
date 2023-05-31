/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			poppins: "'Poppins', sans-serif",
		},
		extend: {
			boxShadow: {
				custom: "0px 3px 24px 6px rgba(23,19,19,0.39)",
			},
			gridTemplateColumns: {
				autofit: "repeat(auto-fit,minmax(18em,1fr))",
			},
		},
	},
	plugins: [],
}
