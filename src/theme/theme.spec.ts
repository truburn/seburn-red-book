import { classList, colorOpacity, getColorVariations } from "./utils";
import chroma from "chroma-js";
import * as Mixins from "./mixins";

describe("List of classes from array", () => {
  it("creates a className string from a single string array", () => {
    const input = ["apple", "orange", "banana"];
    const expected = "apple orange banana";
    const generated = classList(input);
    expect(generated).toEqual(expected);
  });

  it("creates a className string with conditional names", () => {
    const input = [
      {
        apple: true,
        banana: false,
      },
      "orange",
      "strawberry",
    ];
    const expected = "apple orange strawberry";
    const generated = classList(input);
    expect(generated).toEqual(expected);
  });

  it("creates a className string with undefined values", () => {
    const data: any = {};
    const input = [
      "apple",
      data.className,
      {
        orange: false,
        strawberry: false,
        banana: true,
      },
    ];
    const expected = "apple banana";
    const generated = classList(input);
    expect(generated).toEqual(expected);
  });
});

describe("Color Variations", () => {
  it("generates a map of different variations from a provided color", () => {
    const generated = getColorVariations("#C20022");
    const expected = {
      chromaColor: chroma("#C20022"),
      main: "#c20022",
      contrast: "#ffebd7",
      dark: "#560000",
      light: "#ff8277",
      border: "#eeeeee",
    };
    expect(generated).toStrictEqual(expected);
  });
});

describe("Color opacity", () => {
  it("creates a valid rgba string for css from a hex string", () => {
    const generated = colorOpacity("#000000", 0.5);
    const expected = "rgba(0,0,0,0.5)";
    expect(generated).toEqual(expected);
  });

  it("creates a valid rgba string for css from a chroma color object", () => {
    const chromaColor = chroma("#000000");
    const generated = colorOpacity(chromaColor, 0.75);
    const expected = "rgba(0,0,0,0.75)";
    expect(generated).toEqual(expected);
  });
});

describe("Mixins - spacing", () => {
  it("sets default spacing values to 0", () => {
    const generated = Mixins.spacing();
    const expected = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };
    expect(generated).toStrictEqual(expected);
  });

  it("sets all of the spacing to the same value", () => {
    const generated = Mixins.spacing({ all: 10 });
    const expected = {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
    };
    expect(generated).toStrictEqual(expected);
  });

  it("sets only the top and bottom spacing", () => {
    const generated = Mixins.spacing({ vertical: 16 });
    const expected = {
      top: 16,
      bottom: 16,
      left: 0,
      right: 0,
    };
    expect(generated).toStrictEqual(expected);
  });

  it("override horizontal value for right side", () => {
    const generated = Mixins.spacing({
      vertical: "auto",
      horizontal: "1rem",
      right: "0.5rem",
    });
    const expected = {
      top: "auto",
      bottom: "auto",
      left: "1rem",
      right: "0.5rem",
    };
    expect(generated).toStrictEqual(expected);
  });
});
