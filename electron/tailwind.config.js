module.exports = {
  content: [
    "./src/frontend/public/index.html", "./src/frontend/**/*.svelte"
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
