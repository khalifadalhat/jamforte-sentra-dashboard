export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        sentra: {
          dark: "#141414",
          primary: "#287582",
          accent: "#34b2d1",
          light: "#cdf1fa",

          dashboardBg: "#eff2fc",
          dashboardCard: "#e5e8ee",
          dashboardAccent: "#3dc1d9",
        },
      },
    },
  },
  plugins: [],
};
