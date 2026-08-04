/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: { DEFAULT: "#EFE6D3", light: "#F7F0E1", dark: "#E4D8BC" },
        maroon: { DEFAULT: "#5C1420", dark: "#3F0D14", light: "#7A1F2B" },
        gold: { DEFAULT: "#B68A4E", light: "#D8B978", dark: "#8C6432" },
        ink: "#3E2A1B",
      },
     fontFamily: {
        display: ["Cinzel", "serif"], 
        body: ["Cormorant Garamond", "serif"], 
        diwani: ['"DiwaniFont"', "serif"], // ضفنا علامات التنصيص هنا
      },
      backgroundImage: {
        "parchment-texture": "radial-gradient(circle at 20% 20%, rgba(182,138,78,0.06), transparent 40%), radial-gradient(circle at 80% 70%, rgba(92,20,32,0.05), transparent 45%)",
      },
      boxShadow: {
        ornate: "0 4px 24px rgba(62,42,27,0.18)",
      },
    },
  },
  plugins: [],
};