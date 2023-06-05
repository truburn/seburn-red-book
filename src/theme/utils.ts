import { createUseStyles } from "react-jss";
import chroma from "chroma-js";
import { Color, ClassListType, ColorVariation } from "theme/types";

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
 * @param classNames <ClassListType> class names to include with optional conditionals
 *
 * @returns string Space delimited list of classnames
 */
export const classList = (classNames: ClassListType = []): string => {
  return classNames
    .map((val) => {
      if (typeof val === "string") return val;
      if (typeof val === "object") {
        return Object.entries(val)
          .map(([name, addToList]) => {
            if (addToList) return name;
            return "";
          })
          .filter((name) => Boolean(name))
          .join(" ");
      }

      return "";
    })
    .filter((name) => Boolean(name))
    .join(" ");
};

/**
 * Create a color variation object
 * @param color <string> The hex color value
 *
 * @returns ColorVariation
 */
export const getColorVariations = (color: string): ColorVariation => {
  const chromaColor = chroma(color);
  const isLight = chromaColor.luminance() > 0.5;
  const contrast = isLight ? chromaColor.darken(4) : chromaColor.brighten(4);

  return {
    chromaColor,
    main: chromaColor.hex(),
    contrast: contrast.hex(),
    dark: chromaColor.darken(2).hex(),
    light: chromaColor.brighten(2).hex(),
    border: contrast.desaturate(3).hex(),
  };
};

/**
 * Change the opacity on a color
 * @param color <Color> The color to change the opacity on as either a hex string or chroma color
 * @param alpha <number> Opacity percentage as a decimal value 0 - 1
 *
 * @returns string Valid css rgba value
 */
export const colorOpacity = (color: Color, alpha: number): string => {
  let chromaColor = typeof color === "string" ? chroma(color) : color;
  const rgba = chromaColor.alpha(alpha).rgba();
  return `rgba(${rgba})`;
};
