/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: '15px',
	},
	screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px"
	},
	fontFamily: {
		primary: "var(--font-marcellus)",
		secondary: "var(--font-montserrat)",
	},
  	extend: {
		colors: {
			primary: '#473936',
			secondary: {
				DEFAULT: '#f2dfce',
				100: '#CDA39C'
			},
			accent: {
				DEFAULT: '#f19687',
				100: '#f2d5c5',
			}
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
