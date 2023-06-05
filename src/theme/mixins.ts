import { LinedPaperOptions, SpacingOptions, SpacingProps } from "theme/types";
import { colorOpacity, theme } from "theme";

/**
 * Mixins types
 */

/**
 * Mixin to create JSS compatible spacing object for padding or margin
 * @param options <SpacingOptions>
 * @returns SpacingProps
 */
export const spacing = (options: SpacingOptions = {}): SpacingProps => {
  let top: SpacingProps["top"] = 0;
  let bottom: SpacingProps["bottom"] = 0;
  let left: SpacingProps["left"] = 0;
  let right: SpacingProps["right"] = 0;

  if (options.all) {
    top = options.all;
    bottom = options.all;
    left = options.all;
    right = options.all;
  }

  if (options.vertical) {
    top = options.vertical;
    bottom = options.vertical;
  }

  if (options.horizontal) {
    left = options.horizontal;
    right = options.horizontal;
  }

  top = options.top ?? top;
  bottom = options.bottom ?? bottom;
  left = options.left ?? left;
  right = options.right ?? right;

  return { top, bottom, left, right };
};

/**
 * Mixin to create the JSS for rendering background like a lined paper
 */
export const linedPaper = (options: LinedPaperOptions = {}): Record<string, any> => {
  const {
    lineSpacing = theme.baseHeight + theme.baseHeight / 2,
    lineColor = colorOpacity(theme.color.text.light, 0.5),
    lineSize = 1,
    paperColor = theme.color.paper.main,
  } = options;

  const gradient = [
    [lineColor, lineSize],
    [paperColor, lineSize],
    [paperColor, lineSize + lineSpacing],
  ].map(([color, size]) => [color, `${size}px`].join(" "));

  return {
    backgroundColor: paperColor,
    backgroundImage: `linear-gradient(0deg, ${gradient.join(", ")})`,
    backgroundSize: `100% ${lineSpacing + lineSize}px`,
    backgroundRepeat: "repeat-y",
  };
};
