/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        2: "2",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        13: "13",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
        70: "70",
        100: "100",
        110: "110",
      },
      spacing: {
        "200px": "200px",
        "-200px": "-200px",
        60: "15rem",
        30: "7.5rem",
        "60%": "60%",
      },
      right: {
        sun: "200px",
      },
      backgroundImage: {
        "radial-gradient-sunset":
          "radial-gradient(circle at bottom, #F9D390 0%, #E87722 70%)",
        "radial-gradient-sun":
          "radial-gradient(circle, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0) 70%)",
      },
    },
  },
  plugins: [],
  // Enable CSS purging for production builds
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  }
};
