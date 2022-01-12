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
        "custom-pink": "#FF008E",
        "custom-maroon": "#D22779",
        "custom-purple": "#612897",
        "custom-navy": "#0C1E7F",
      },
    },
  },
  plugins: [],
}
