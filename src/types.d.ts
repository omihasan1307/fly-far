// src/types.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    baseColor: Palette["primary"];
  }
  interface PaletteOptions {
    baseColor?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Radio" {
  interface RadioPropsColorOverrides {
    baseColor: true;
  }
}
