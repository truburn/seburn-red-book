import chroma from "chroma-js";

// Color type
export type Color = string | chroma.Color;

// Input type for Mixins.spacing()
export interface SpacingOptions {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  all?: number | string;
  horizontal?: number | string;
  vertical?: number | string;
}

// Returned type from Mixins.spacing()
export interface SpacingProps {
  top: number | string;
  bottom: number | string;
  left: number | string;
  right: number | string;
}

// Input type for Mixins.linedPaper()
export interface LinedPaperOptions {
  lineSize?: number;
  lineColor?: Color;
  lineSpacing?: number;
  paperColor?: Color;
}

// Input for the utility method classList()
export type ClassListType = Array<string | undefined | Record<string, boolean>>;

// Returned type for utility method getColorVariation()
export interface ColorVariation {
  chromaColor: chroma.Color;
  main: string;
  contrast: string;
  dark?: string;
  light?: string;
  border?: string;
}
