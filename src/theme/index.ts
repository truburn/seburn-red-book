import { DefaultTheme } from "react-jss";
import { colors } from "./variables";
import { getColorVariations } from "./utils";

export * from "./global";
export * from "./utils";
export * from "./variables";

const color = Object.fromEntries(
  Object.entries(colors).map(([key, color]) => {
    return [key, getColorVariations(color)];
  })
);

/**
 * Application theme variables
 */
export const theme: DefaultTheme = {
  baseHeight: 16,
  border: {
    style: "solid",
    width: 1,
    borderColor: color.text.border,
  },
  color,
  font: {
    body: {
      fontFamily: `'Caveat', cursive`,
      lineHeight: 1.125,
      size: {
        small: 12,
        medium: 16,
        large: 20,
      },
      weight: {
        regular: 400,
        bold: 700,
      },
    },
    title: {
      fontFamily: `'Caveat', cursive`,
      lineHeight: 1,
      weight: {
        regular: 400,
        bold: 700,
      },
    },
    subtitle: {
      fontFamily: `'Comfortaa', cursive`,
      lineHeight: 1,
      weight: {
        light: 300,
        regular: 500,
        bold: 700,
      },
    },
    info: {
      fontFamily: `'Comfortaa', cursive`,
      lineHeight: 1,
      size: {
        small: 9,
        medium: 11,
        large: 14,
      },
      weight: {
        light: 300,
        regular: 500,
        bold: 700,
      },
    },
  },
  spacing: {
    thin: 4,
    small: 8,
    medium: 16,
    large: 32,
  },
};
