/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
  "./forms/**/*.{ts,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    fontFamily: {
      mali: ["var(--font-mali)"],
      avenir: ["var(--font-myFont)"],
    },
    animation: {
      typing: "typing 2s steps(6), blink 1s infinite",
      "spin-90": "rotate-90 2s ease-in-out infinite",
      "accordion-down": "accordion-down 0.2s ease-out",
      dropin: "drop-in 0.5s ease-in-out 0.25s 1 forwards",
      "accordion-up": "accordion-up 0.2s ease-out",
      "pulse-slow": "pulseAnimate 2s ease-out infinite",
      "lightbulb-glow": "lightbulb-glow 3s ease-in-out",
      "lightbulb-super-glow": "lightbulb-super-glow 4s ease-in-out",
      "lightbulb-super-glow-green": "lightbulb-super-glow-green 4s ease-in-out",
      "lightbulb-super-glow-grey": "lightbulb-super-glow-grey 4s ease-in-out",
      "lightbulb-super-glow-blue": "lightbulb-super-glow-blue 3s ease-in-out",
      "slow-scale": "scaleUpAndDown 40s forwards",
    },
    clipPath: {
      "custom-cut": "polygon(5% 0, 95% 0, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)",
    },
    keyframes: {
      typing: {
        from: {
          width: "0",
        },
        to: {
          width: "6ch",
        },
      },
      blink: {
        from: {
          "border-right-color": "transparent",
        },
        to: {
          "border-right-color": "black",
        },
      },
      "drop-in": {
        "0%": {
          opacity: "0",
          transform: "scale(0)",
          animationTimingFunction: "cubic-bezier(0, 0.2, 0.4, 0.7)",
        },
        "100%": {
          opacity: "1",
          transform: "scale(1)",
        },
      },
      "rotate-90": {
        "0%,50%, 100%": { transform: "rotate(0deg)" },
        "25%": { transform: "rotate(-30deg)" },
        "75%": { transform: "rotate(30deg)" },
      },
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
      pulseAnimate: {
        "100%": {
          opacity: "0",
          transform: "scale(1.7)",
        },
      },
      "lightbulb-glow": {
        "0%, 100%": {
          boxShadow: "0 0 5px rgba(255, 255, 153, 0.4)",
        },
        "30%": {
          boxShadow: "0 0 25px rgba(255, 255, 153, 0.6)",
        },
        "50%": {
          boxShadow: "0 0 50px rgba(255, 255, 153, 1.4)",
        },
        "70%": {
          boxShadow: "0 0 25px rgba(255, 255, 153, 0.6)",
        },
      },

      "lightbulb-super-glow": {
        "0%, 100%": {
          boxShadow: "0 0 10px rgba(255, 255, 153, 0.6)",
        },
        "20%": {
          boxShadow: "0 0 50px rgba(255, 255, 153, 0.8)",
        },
        "35%": {
          boxShadow: "0 0 50px rgba(255, 255, 153, 1.2)",
        },
        "50%": {
          boxShadow: "0 0 100px rgba(255, 255, 153, 2)",
        },
        "80%": {
          boxShadow: "0 0 50px rgba(255, 255, 153, 0.8)",
        },
      },
      "lightbulb-super-glow-green": {
        "0%, 100%": {
          boxShadow: "0 0 10px rgba(165, 226, 90, 0.6)",
        },
        "20%": {
          boxShadow: "0 0 50px rgba(165, 226, 90, 0.8)",
        },
        "35%": {
          boxShadow: "0 0 50px rgba(165, 226, 90, 1.2)",
        },
        "50%": {
          boxShadow: "0 0 100px rgba(165, 226, 90, 2)",
        },
        "80%": {
          boxShadow: "0 0 50px rgba(165, 226, 90, 0.8)",
        },
      },
      "lightbulb-super-glow-blue": {
        "0%, 100%": {
          boxShadow: "0 0 10px rgba(39, 175, 231, 0.4)",
        },
        "30%": {
          boxShadow: "0 0 50px rgba(39, 175, 231, 0.6)",
        },
        "50%": {
          boxShadow: "0 0 50px rgba(39, 175, 231, 1.4)",
        },
        "70%": {
          boxShadow: "0 0 100px rgba(39, 175, 231, 0.6)",
        },
      },
      "lightbulb-super-glow-grey": {
        "0%, 100%": {
          boxShadow: "0 0 10px rgba(69, 76, 82, 0.4)",
        },
        "30%": {
          boxShadow: "0 0 50px rgba(69, 76, 82, 0.6)",
        },
        "50%": {
          boxShadow: "0 0 50px rgba(69, 76, 82, 1.4)",
        },
        "70%": {
          boxShadow: "0 0 100px rgba(69, 76, 82, 0.6)",
        },
      },
      scaleUpAndDown: {
        "0%": { transform: "scale(1)" },
        "15%": { transform: "scale(1.05)" },
        "25%": { transform: "scale(1.1)" },
        "35%": { transform: "scale(1.15)" },
        "50%": { transform: "scale(1.2)" },
        "70%": { transform: "scale(1.25)" },
        "75%": { transform: "scale(1.2)" },
        "85%": { transform: "scale(1.1)" },
        "95%": { transform: "scale(1.05)" },
        "100%": { transform: "scale(1)" },
      },

      "gradient-pulse": {
        "0%": {
          backgroundPosition: "0% 50%", // Starting point of the gradient
        },
        "100%": {
          backgroundPosition: "100% 50%", // Ending point of the gradient
        },
      },
      lightMove: {
        "0%": { strokeDashoffset: "100%" },
        "100%": { strokeDashoffset: "0%" },
      },
      highlightPath: {
        "0%": { stroke: "rgba(255, 255, 153, 0.6)" },
        "50%": { stroke: "rgba(255, 255, 153, 2)" },
        "100%": { stroke: "rgba(255, 255, 153, 1)" },
      },
    },
    colors: {
      "logo-color": "#2c49a4",
      "main-color": "#255df9",
      "main-light-color": "#429fff",
      "yellow-color": "#ffe500",
      "green-color": "#03c75a",
      "disabled-button": "#afaeb3",
      "grey-light":"#f2f3f5",
      "grey-font":"#404251",
      "grey-font-light":"#80808e",
      "grey-border":"#e4e5ea",
      "grey-modal-bg":"#626262"
    },
    backgroundColor: {
      
    },
  },
};
export const plugins = [
  nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: "#FFDE00",
            foreground: "#000000",
          },
          secondary: {
            DEFAULT: "#27AFE7",
            foreground: "#000000",
          },
          divider: {
            DEFAULT: "#a5e25a",
            foreground: "#000000",
          },
          focus: "#BEF264",
        },
      },
    },
  }),
];
