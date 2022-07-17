/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
      themes: [
        {
          main: {
            ...require("daisyui/src/colors/themes")["[data-theme=autumn]"],
            "primary": "#780000",
            "secondary": "#C1121F",
            "accent": "#f26a4f",
            "neutral": "#EBE8E8",
            "base-100": "#262626",
            "info": "#0CA6E9",
            "success": "#84cc16",
            "warning": "#fcdd00",
            "error": "#65010c",
          },
        },
      ],
    },
  plugins: [require('daisyui')],
}
