module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        "custom-purple": {
          "50": "#cad1ee",
          "100": "#FFE9FF",
          "200": "#BFA1D4",
          "300": "#A14BED",
          "400": "#842FD0",
          "500": "#660AB4",
          "600": "#480098",
          "700": "#27007D",
          "800": "#3A2A46",
        },
        "custom-cyan": "#00d7d7",
        "custom-blue": {
          "100": "#657ee5",
        }

      },
    },
  },
  plugins: [],
}
