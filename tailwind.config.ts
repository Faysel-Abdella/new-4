import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "logo-color": "#2c49a4",
        "main-color": "#255df9",
        "main-light-color": "#429fff",
        "yellow-color": "#ffe500",
        "green-color": "#03c75a",
        "disabled-button": "#afaeb3",
        "grey-light": "#f2f3f5",
        "grey-font": "#404251",
        "grey-font-light": "#80808e",
        "grey-border": "#e4e5ea",
        "grey-modal-bg": "#626262",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#255df9",
              foreground: "#fff",
            },
            secondary: {
              DEFAULT: "#429fff",
              foreground: "#fff",
            },
            focus: "#255df9",
          },
        },
      },
    }),
  ],
} satisfies Config;
