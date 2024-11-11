/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-font": "#b7ab98", // Add custom color with a name like 'custom-font'
        "btn-color": "#453f35",
      },
      textShadow: {
        "custom-beige": "2px 2px 4px rgba(183, 171, 152, 0.7)", // Shadow color for #b7ab98
        "custom-light-beige": "2px 2px 4px rgba(242, 239, 232, 0.7)", // Shadow color for #f2efe8
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-custom-beige": {
          textShadow: "2px 2px 4px rgba(183, 171, 152, 0.7)",
        },
        ".text-shadow-custom-light-beige": {
          textShadow: "2px 2px 4px rgba(242, 239, 232, 0.7)",
        },
      });
    },
  ],
};
