import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: "#0ba3ef",
        darkBg: "#020338"
      },
      backgroundImage: {
        "gradient-cover":
        "linear-gradient(90.21deg, rgba(120, 3, 56, 0.2) -5.91%, rgba(174, 47, 189, 0.3) 111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;
