import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#facc15",
        primaryText: "#333333",
        secondary: "#F3BE12",
        accent: "#FFF9F9",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
        starwars: ['StarJedi', 'sans-serif'],
      },
      screens: {
        custom: "900px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.25rem',
        sm: '1.25rem',
        lg: '1.25rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
    },
  },
  plugins: [],
} satisfies Config
