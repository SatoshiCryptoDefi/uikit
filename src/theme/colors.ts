import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#dc00ff",
  primaryBright: "#ffb948",
  primaryDark: "#dc00ff",
  secondary: "#ffb948",
  success: "#31D0AA",
  warning: "#FFB237",
  };
  
  export const brandColors = {
    binance: "#F0B90B",
  };
  
  export const lightColors: Colors = {
    ...baseColors,
    ...brandColors,
    background: "#FAF9FA",
    backgroundDisabled: "#E9EAEB",
    contrast: "#261d13",
    invertedContrast: "#FFFFFF",
    input: "#f4efea",
    // inputBorder: "#cccccc",
    inputSecondary: "#cccccc",
    tertiary: "#f5f3ef",
    text: "#333333",
    textDisabled: "#BDC2C4",
    textSubtle: "#703c2c",
    activeButton: "#397f49",
    borderColor: "#E9EAEB",
    card: "#FFFFFF",
    nav: "#FFFFFF",
    gradients: {
      bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    },
  };
  
  export const darkColors: Colors = {
    ...baseColors,
    ...brandColors,
    background: "#353331",
    backgroundDisabled: "#423d37",
    contrast: "#FFFFFF",
    invertedContrast: "#261e13",
    input: "#5a4d3f",
    // inputBorder: "#cccccc",    
    inputSecondary: "#cccccc",
    tertiary: "#473e35",
    text: "#fff",
    textDisabled: "#716a61",
    textSubtle: "#b369ff",
    activeButton: "#397f49",
    borderColor: "#63584b",
    card: "#130119",
    nav: "#130119",
    gradients: {
      bubblegum: "linear-gradient(139.73deg, #893e92 0%, #3a0e40 100%)",
    },
  };