import { createSystem, defaultConfig } from "@chakra-ui/react";

// import { fonts } from "./fonts";

const customTheme = createSystem(defaultConfig, {
  theme: {
    keyframes: {
      shakeX: {
        "0%": { transform: "scale(1)" },
        "100%": { transform: "scale(1.1)" },
      },
    },
    tokens: {
      colors: {
        primary: { value: "#1e1e1f" },
        secondary: { value: "#2B2B2C" },
        tertiary: { value: "#ffdb70" },
        title: {
          100: { value: "#d6d6d6" },
          200: { value: "#d6d6d6b3" },
        },
        borderColor: { value: "#383838" },
        red: {
          100: { value: "#fff1f0" },
        },
      },
      animations: {
        shakeX: { value: "shakeX 0.6s ease forwards" },
      },
    },
  },
  globalCss: {
    "::-moz-selection": {
      backgroundColor: "tertiary", // ✅ Apply selection background
      color: "black", // ✅ Apply selection text color
    },
    "::selection": {
      backgroundColor: "tertiary",
      color: "black",
    },
  },
});

export default customTheme;
