module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        chargeFlow: {
          '0%': { offsetDistance: '0%', opacity: '1' },
          '100%': { offsetDistance: '100%', opacity: '1' },
        },
      },
      animation: {
        'charge-flow': 'chargeFlow 4s linear infinite',
      },
    },
  },
  plugins: [],
}
