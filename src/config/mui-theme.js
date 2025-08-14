import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xm: 320,
      md: 1000,
      lg: 1490,
    },
  },
  palette: {
    primary: { main: "#27626B" },
    secondary: { main: "#F7D268" },
    success: { main: "#72B693" },
    grey: {
      100: "#F9F9F8",
      200: "#E6F0EE",
      300: "#D4D4D4",
      800: "#525C60",
    },
    text: {
      primary: "#27626B",
      secondary: "#525C60",
    },
  },

  typography: {
    fontFamily: [
      "Inter",
      "Open Sans",
      "Roboto",
      "Yellowtail",
      "Ubuntu",
      "sans-serif",
    ].join(","),

    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      color: "#27626B",
      fontFamily: "Roboto, sans-serif",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 700,
      color: "#27626B",
      fontFamily: "Inter, sans-serif",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      color: "#27626B",
      fontFamily: "Open Sans, sans-serif",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#27626B",
      fontFamily: "Yellowtail, cursive",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      color: "#27626B",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      color: "#27626B",
    },
    body1: {
      fontSize: "1rem",
      color: "#525C60",
      lineHeight: 1.6,
      fontFamily: "Open Sans, sans-serif",
    },
    body2: {
      fontSize: "0.875rem",
      color: "#525C60",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: "#27626B",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#1f4f56",
          },
        },
        containedSecondary: {
          backgroundColor: "#F7D268",
          color: "#27626B",
          "&:hover": {
            backgroundColor: "#e5be5e",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingLeft: "1rem",
          listStyleType: "decimal",
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "quote" },
          style: {
            fontStyle: "italic",
            backgroundColor: "#F9F9F8",
            padding: "1rem",
            borderRadius: "8px",
            borderLeft: "4px solid #27626B",
            color: "#525C60",
            fontFamily: "Roboto, sans-serif",
          },
        },
      ],
    },
  },
});

export default theme;
