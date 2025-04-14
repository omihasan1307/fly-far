// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    baseColor: {
      main: "#32D095", 
      light: "#63d9aa",
      dark: "#229267",
      contrastText: "#fff",
    },
  },
});

export default theme;
