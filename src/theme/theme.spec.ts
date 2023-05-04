import { classList, getColorVariations } from "./utils";
import chroma from "chroma-js";

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
      contrast: "#ffb6a6",
      dark: "#560000",
      light: "#ff8277",
      border: "#c8c8c8",
    };
    expect(generated).toStrictEqual(expected);
  });
});
