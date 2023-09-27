/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderRadius: {
      "4xl": "4rem",
    },
    fontFamily: {
      "px-regular": "Inter",
    },
    extend: {
      colors: {
        "neutral-50": "#f9f9f9",
        "neutral-100": "#f4f4f4",
        "neutral-200": "#e4e4e4",
        "neutral-300": "#d3d3d3",
        "neutral-400": "#a2a2a2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0a0a0a",
        "neutral-1000": "#000000",
        "twitter-blue-default": "#1d9bf0",
        "twitter-blue-hover": "#1871ca",
        "twitter-blue-disabled": "#1e5d87",
        "blue-wash": "#75beef",
        "blue-stroke": "#546a7a",
        "searchbar-fill": "#212327",
        "card-fill": "#212327",
        "success": "#00BE74",
        "error": "#8B141A",
      },
      
      
    },
  },
  plugins: [],
}
