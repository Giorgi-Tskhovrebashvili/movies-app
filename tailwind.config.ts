import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat"
      },
      colors: {
        red: "#FC4747",
        black: "#10141E",
        white: "#FFFFFF",
        gray: "#5A698F",
        blue: "#161D2F",
      },
      opacity: {
        '49': '0.4979',
      },
    },
  },
  plugins: [],
};
export default config;
