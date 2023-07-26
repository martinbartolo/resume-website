/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			playfair: ['"Playfair Display"', 'serif'],
			poppins: ['Poppins', 'sans-serif'],
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
