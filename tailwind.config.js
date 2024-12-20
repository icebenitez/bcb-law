const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: [
          "Public Sans",
          "Noto Sans",
          "sans-serif",
          // ...defaultTheme.fontFamily.sans,
        ],
      },
    },
    // fontFamily: {
    //   'display': ['Oswald'],
    //   'body': ['"Open Sans"'],
    // }
  },
  plugins: [],
};
