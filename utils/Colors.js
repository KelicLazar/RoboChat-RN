import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Colors = {
  primary500: "#1CA8BE",
  primary600: "#157b8a",
  primary700: "#10525c",
  secondary500: "#7bd8f4",
  secondary600: "#47e0ff",
  secondary050: "##D17A59",
  secondary400: "#cedcdb",
  tertiary900: "#151515",
  tertiary100: "#CFCFCF",
  tertiary050: "#cfcfcfd9",
  black: "black",
  black050: "rgba(0, 0, 0, 0.05)",
};

export const codeTheme = {
  ...atomOneDark,
  hljs: {
    ...atomOneDark.hljs,
    color: "white",
  },
  "hljs-comment": {
    ...atomOneDark.hljsComment,
    color: "#b9b8b8",
  },

  "hljs-keyword": {
    ...atomOneDark.hljsKeyword,
    color: Colors.secondary600,
  },
  "hljs-built_in": {
    color: "#fbff00",
  },
  "hljs-string": {
    color: "#82cd4d",
  },
};

export const BackgroundLocations = [
  0.05, 0.05, 0.1, 0.1, 0.15, 0.15, 0.2, 0.2, 0.25, 0.25, 0.3, 0.3, 0.35, 0.35,
  0.4, 0.4, 0.45, 0.45, 0.5, 0.5, 0.55, 0.55, 0.6, 0.6, 0.65, 0.65, 0.7, 0.7,
  0.75, 0.75, 0.8, 0.8, 0.85, 0.85, 0.9, 0.9, 0.95, 0.95, 1,
];
export const BackgroundGradientColors = [
  Colors.secondary500,
  "rgba(0, 0, 0, 0.05)",
  "rgba(0, 0, 0, 0.05)",
  Colors.primary600,
  Colors.primary600,
  "rgba(0, 0, 0, 0.05)",
  "rgba(0, 0, 0, 0.05)",
  Colors.secondary500,
  Colors.secondary500,
  "rgba(0, 0, 0, 0.05)",
  "rgba(0, 0, 0, 0.05)",
  Colors.primary600,
  Colors.primary600,
  "rgba(0, 0, 0, 0.05)",
  "rgba(0, 0, 0, 0.05)",
  Colors.secondary500,
  Colors.secondary500,
  "rgba(0, 0, 0, 0.05)",
  "rgba(0, 0, 0, 0.05)",
  Colors.primary600,
  Colors.primary600,
  "rgba(0, 0, 0, 0.05)",
  "rgba(0, 0, 0, 0.05)",
  Colors.secondary500,
  Colors.secondary500,
  "rgba(0, 0, 0, 0.05)",
  "rgba(0, 0, 0, 0.05)",
  Colors.primary600,
  Colors.primary600,
  "rgba(0, 0, 0, 0.05)",
  "rgba(0, 0, 0, 0.05)",
  Colors.secondary500,
  Colors.secondary500,
  "rgba(0, 0, 0, 0.05)",
  "rgba(0, 0, 0, 0.05)",
  Colors.primary600,
  Colors.primary600,
  "rgba(0, 0, 0, 0.05)",
  "rgba(0, 0, 0, 0.05)",
];

// export const Colors = {
//   primary500: "#aa0505",
//   primary600: "#6a0c0b",
//   primary700: "#4b0908",
//   secondary500: "#fbca03",
//   secondary600: "#b97d10",
//   secondary050: "#fbc90374",
//   secondary400: Colors.secondary400,
//   tertiary900: "#232323",
//   tertiary100: "#CFCFCF",
//   tertiary050: "#cfcfcfd9",
//   black: "black",
//   black050: "rgba(0, 0, 0, 0.05)",
// };
