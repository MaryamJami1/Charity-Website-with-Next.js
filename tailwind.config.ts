import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    "extends": "next",
    "rules": {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off"
    }
  }
  
  
};
export default config;
