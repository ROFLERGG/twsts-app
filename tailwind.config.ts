import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
      screens: {
        default: '1200px'
      }
    },
    extend: {
      keyframes: {
        appear: {
          '0%' : {opacity: '0'},
          '100%' : {opacity: '1'},
        },
        disappear: {
          '0%' : {opacity: '1'},
          '100%' : {opacity: '0'},
        },
      },
      animation: {
        appear: 'appear 0.3s ease-in-out forwards',
        disappear: 'disappear 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
