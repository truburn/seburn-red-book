import { DefaultTheme } from "react-jss";
import * as vars from "./variables";
import { getColorVariations } from "./utils";

export * from "./MyThemeProvider";
export * from "./utils";

const color = Object.fromEntries(
  Object.entries(vars.colors).map(([key, value]) => {
    return [key, getColorVariations(value)];
  })
);

/**
 * Application theme variables
 */
export const theme: DefaultTheme = {
  baseHeight: vars.baseHeight,
  border: {
    style: "solid",
    width: 1,
    borderColor: color.text.border,
  },
  color,
  font: {
    body: {
      ...vars.fontFamilies.primary,
      lineHeight: 1.125,
      size: {
        small: vars.baseHeight - 4,
        medium: vars.baseHeight,
        large: vars.baseHeight + 4,
      },
    },
    title: {
      ...vars.fontFamilies.primary,
      lineHeight: 1,
    },
    subtitle: {
      ...vars.fontFamilies.secondary,
      lineHeight: 1,
    },
    info: {
      ...vars.fontFamilies.secondary,
      lineHeight: 1,
      size: {
        small: vars.baseHeight - 7,
        medium: vars.baseHeight - 5,
        large: vars.baseHeight - 2,
      },
    },
  },
  spacing: {
    thin: vars.baseHeight / 4,
    small: vars.baseHeight / 2,
    medium: vars.baseHeight,
    large: vars.baseHeight * 2,
  },
};
