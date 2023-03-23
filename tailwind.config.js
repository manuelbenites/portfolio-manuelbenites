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
				project: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
				skill: "0 3px 3px 0 rgba(0,0,0,.15)",
			},
			gridTemplateColumns: {
				autofit: "repeat(auto-fit,minmax(18em,1fr))",
			},
		},
	},
	plugins: [],
}
