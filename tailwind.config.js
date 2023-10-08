/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderRadius: {
      "border-65": "65px",
      "border-30": "30px",
      "border-9999": "9999px",
      "border-4": "4px",
    },
    borderWidth: {
      "16": "16px",
    },
    boxShadow: {
      "3xl": "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
    },
    fontFamily: {
      "px-regular": "Inter",
    },
    width: {
      "334": "334px",
      "85": "85px",
      "96": "96px",
      "222": "222px",
      "348": "348px",
      "426": "426px",
      "434": "434px",
      "442": "442px",
      "512": "512px",
      "598": "598px",
    },
    height: {
      "223": "223px",
      "355": "355px",
    },
    fontSize: {
      sm: "16px",
      f14: "14px",
      f15: "15px",
    },
    extend: {
      padding: {
        "15px": "15px",
        "93": "93px",
      },
      backdropBlur: {
        "n": "47.34px",
      },
      spacing: {
        "5px": "5px",
      },

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

