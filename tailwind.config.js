/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

