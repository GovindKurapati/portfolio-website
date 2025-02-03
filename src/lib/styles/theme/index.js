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
            value: { _light: "#1e1e1f", _dark: "#1e1e1f" }, // Custom dark background
          },
          subtle: {
            value: { _light: "#2B2B2C", _dark: "#2B2B2C" }, // Custom dark subtle background
          },
          muted: {
            value: { _light: "{colors.gray.100}", _dark: "#262626" }, // Custom dark muted background
          },
        },
        secondary: {
          DEFAULT: {
            value: { _light: "#2B2B2C", _dark: "#2B2B2C" }, // Custom dark text color
          },
          muted: {
            value: { _light: "{colors.gray.600}", _dark: "#a3a3a3" }, // Custom dark muted text
          },
        },
        tertiary: {
          DEFAULT: {
            value: { _light: "#ffdb70", _dark: "#ffdb70" }, // Custom dark border
          },
        },
        title: {
          100: {
            value: { _light: "#d6d6d6", _dark: "#d6d6d6" }, // Custom dark title
          },
          200: {
            value: { _light: "#d6d6d6b3", _dark: "#d6d6d6b3" }, // Custom dark title
          },
        },
        borderColor: {
          DEFAULT: {
            value: { _light: "#383838", _dark: "#383838" }, // Custom dark border
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
      bg: "#121212",
      overflowX: "hidden",
    },
    body: {
      overflowX: "hidden",
    },
  },
});

export default customTheme;
