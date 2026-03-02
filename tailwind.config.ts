import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C1272D",
        accent: "#D4A853",
        background: "#F9F9F9",
        foreground: "#1A1A1A",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
