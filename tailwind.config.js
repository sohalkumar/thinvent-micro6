/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/images/hero_graphics.svg')",
        "micro-6-intro": "url('/images/micro_6_intro.png')",
        "micro-6-specs": "url('/images/micro_6_specs.png')",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        caladea: ["var(--font-caladea)"],
      },
      colors: {
        bgPurple: "#2C1F4A",
        primaryPurple: "#9574EF",
        secondaryPurple: "#B0B0D1",
        darkPurple: "#38275F",
        white: "#FFFFFF",
        dark: "#222222",
        gray: "#6F6F6F",
        dividerPurple: "#DADAF7",
      },
      padding: {
        "lg-x": "9.75rem",
      },
    },
  },
  plugins: [],
};
