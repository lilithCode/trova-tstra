/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#cc5200",
          dark: "#cc5200",
        },
        forest: {
          dark: "#000033",
          deep: "#00004d",
          midnight: "#000066",
        },
        social: {
          icon: "#5a5a5a",
          hover: "#1E73BE",
          border: "#1a1b22",
          borderHover: "#0f1016",
        },
        sunset: {
          light: "#F9D390",
          DEFAULT: "#E87722",
        },
        accent: {
          light: "#E87722",
          dark: "#794f35",
        },
        divider: "#888888",
        gray: {
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          900: "#111827",
        },
        orange: {
          500: "#bd4904",
          600: "#FF7F32",
          700: "#793909",
          800: "#794f35",
        },
        field: {
          DEFAULT: "#1a1a2e",
        },
        link: {
          DEFAULT: "#d1d5db",
        },
        online: {
          DEFAULT: "#4ade80",
          70: "rgba(74, 222, 128, 0.7)",
        },
      },
      fontFamily: {
        heading: ["sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      width: {
        90: "90%",
      },
      height: {
        400: "400px",
        600: "600px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        ping: {
          "75%, 100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
        slidein: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        slidein: "slidein 0.3s ease-out forwards",
      },
      backgroundImage: {
        "radial-gradient-sunset":
          "radial-gradient(circle at bottom, #F9D390 0%, #E87722 70%)",
        "radial-gradient-sun":
          "radial-gradient(circle, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0) 70%)",
        "radial-gradient-blur":
          "radial-gradient(circle, rgba(0, 57, 128, 0.9) 0%, rgba(0, 46, 102, 0.2) 70%)",
        "linear-gradient-forest":
          "linear-gradient(to bottom, #000000, #000033, #00004d, #000066)",
        "gradient-cross":
          "linear-gradient(to right, transparent, var(--tw-colors-gray-500), transparent), linear-gradient(to bottom, transparent, var(--tw-colors-gray-500), transparent)",
        "linear-gradient-blue":
          "linear-gradient(to bottom, #000000, #000033, #00004d, #000066)",
        "radial-gradient-orange":
          "radial-gradient(circle, #FFA500 0%, #FF6347 100%)",
      },
      spacing: {
        "neg-200": "-200px",
        22: "5.5rem",
        35: "8.75rem",
        40: "10rem",
        42: "10.5rem",
        70: "17.5rem",
      },
      zIndex: {
        0: 0,
        5: 5,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        60: 60,
        70: 70,
        100: 100,
        110: 110,
      },
      minHeight: {
        "150vh": "150vh",
        "170vh": "170vh",
      },
      rotate: {
        25: "25deg",
        45: "45deg",
        "-45": "-45deg",
        "-25": "-25deg",
      },
    },
  },
  plugins: [],
};
