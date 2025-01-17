import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      fontSize: {
        '24px': '24px',
      },
      lineHeight: {
        '26.4': '26.4px',
      },
      colors: {
        'gray-custom': 'rgba(38, 38, 38, 0.8)', 
        'custom-green': '#01A85A',
        'custom-green-opacity': '#01A85A33',
      },
    },
  },
  plugins: [],
}
export default config
