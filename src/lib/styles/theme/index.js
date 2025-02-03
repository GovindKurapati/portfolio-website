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
    semanticTokens: {
      colors: {
        // primary: { value: "#1e1e1f", _dark: "pink", _light: "red" },
        // secondary: { value: "#2B2B2C" },
        // tertiary: { value: "#ffdb70" },
        // title: {
        //   100: { value: "#d6d6d6" },
        //   200: { value: "#d6d6d6b3" },
        // },
        // borderColor: { value: "#383838" },
        primary: {
          DEFAULT: {
            value: { _light: "#F1F2F4", _dark: "#1e1e1f" }, // Custom dark background
          },
        },
        secondary: {
          DEFAULT: {
            value: { _light: "#DCDFE4", _dark: "#2B2B2C" }, // Custom dark text color
          },
        },
        tertiary: {
          DEFAULT: {
            value: { _light: "#3767D6", _dark: "#F5CD47" }, // Custom dark border
          },
        },
        title: {
          100: {
            value: { _light: "black", _dark: "#d6d6d6" }, // Custom dark title
          },
          200: {
            value: { _light: "#d6d6d6b3", _dark: "#d6d6d6b3" }, // Custom dark title
          },
        },
        borderColor: {
          DEFAULT: {
            value: { _light: "#B3B9C4", _dark: "#383838" }, // Custom dark border
          },
        },
        backgroundColor: {
          DEFAULT: {
            value: { _light: "#F7F8F9", _dark: "#121212" }, // Custom dark background
          },
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
    html: {
      color: "title.100",
      overflowX: "hidden",
      backgroundColor: "backgroundColor",
    },
    body: {
      overflowX: "hidden",
    },
  },
});

export default customTheme;
