/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  darkMode: ["class"],
  plugins: [
    require("flowbite/plugin")
  ]
};

