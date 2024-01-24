/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  safelist: [
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/theming/themes")["night"],
          "primary": "#F6FF00",
          "base-100": "#3B1C56",
        },
      },
    ]
  }
}
