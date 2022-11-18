// https://mui.com/material-ui/customization/theming/

import { createTheme } from "@mui/material";
import {rem} from '../utils/pxToRem'

export default createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#fff",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#177EFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          cursor: "pointer!important",
          backgroundColor: "#177EFF !important",
          borderRadius: "8px",
          textTransform: "none",
          boxShadow: "none",
          color: "#fff",
          fontSize: rem(14),
          lineHeight: rem(16),
          fontWeight: 400,
          padding: `${rem(10)} 0`,
          transition: "all 0.2s ease-in-out",
          width: `${rem(163)}`,
          '&:hover': {
            color: 'white',
            backgroundColor: "#177EFF",
          },
          svg: {
            marginLeft: rem(15),
          },
          "& .MuiTypography-root": {
            fontWeight: 400,
          },
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: rem(16),
          paddingRight: rem(16),
          "@media (min-width:1440px)": {
            maxWidth: "1248px",
            width: "100%",
          },
          "@media (min-width:1200px)": {
            paddingLeft: rem(16),
            paddingRight: rem(16),
          },
          "@media (min-width:780px)": {
            maxWidth: "748px",
            paddingLeft: rem(16),
            paddingRight: rem(16),
          },
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: rem(72),
      fontWeight: 700,
      lineHeight: rem(76),
      color: "#fff",
      "@media (max-width: 768px)": {
        fontSize: rem(32),
        lineHeight: rem(37),
        fontWeight: 600,
        color: "#1A2024",
        letterSpacing: "0.33px",
      },
    },
  },
});
