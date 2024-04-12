/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  darkMode: ['selector', '[data-mode="dark"]', 'class'],
  plugins: [
    require('flowbite/plugin')
  ],
}

