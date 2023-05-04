import { createUseStyles } from "react-jss";
import chroma from "chroma-js";

/**
 * Create styles for a component with named prefix
 * @param name Name to prefix to the classname
 * @param styles Styles to create into classes
 * @param options Additional options to apply to the classes
 */
export const createStyles = (name: string, styles: any, options?: any) =>
  createUseStyles(styles, { ...options, name });

/**
 * Combine a list of classnames into a single string
 */
export type ClassistType = Array<string | undefined | Record<string, boolean>>;
export const classist = (classNames: ClassistType = []): string => {
  const classes: string[] = classNames
    .map((val) => {
      if (typeof val === "string") return val;
      if (typeof val === "object") {
        const [name, addToList] = Object.entries(val)[0];
        if (addToList) return name;
      }

      return "";
    })
    .filter((name) => name !== "");

  return classes.join(" ");
};

/**
 * Create a color variation object
 */
export interface ColorVariation {
  chromaColor: chroma.Color;
  main: string;
  contrast: string;
  dark?: string;
  light?: string;
  border?: string;
}
export const getColorVariations = (color: string): ColorVariation => {
  const chromaColor = chroma(color);
  const isLight = chromaColor.luminance() > 0.5;
  const contrast = isLight ? chromaColor.darken(3) : chromaColor.brighten(3);

  return {
    chromaColor,
    main: chromaColor.hex(),
    contrast: contrast.hex(),
    dark: chromaColor.darken(2).hex(),
    light: chromaColor.brighten(2).hex(),
    border: contrast.desaturate(3).hex(),
  };
};
