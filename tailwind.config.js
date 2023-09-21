/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			black: '#292929',
			white: '#ffffff',
			blue: '#279EFF',
			yellow: '#F4E869'
		},
		extend: {
			screens: {
				xs: '533px'
			}
		}
	},
	plugins: []
};
