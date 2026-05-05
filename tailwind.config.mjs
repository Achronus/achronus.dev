/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,md,mdx,ts,tsx}"],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        torquoise: {
          DEFAULT: "#40d9f1",
          dark: "#4fcbdf",
          light: "#CEE9EE",
          fade: "#f1fcfe",
        },
        blue: {
          DEFAULT: "#1992d8",
          dark: "#107ebd",
          light: "#2386bf",
        },
        black: {
          DEFAULT: "#000",
          theme: "#242424",
        },
        grey: {
          DEFAULT: "#6b6b6b",
          light: "#bcc4cd",
        },
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        "dm-mono": ["DM Mono", "monospace"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
