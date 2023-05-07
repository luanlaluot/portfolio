import { alpha } from "@mui/material/styles";
import { TTheme } from "theme";

// ----------------------------------------------------------------------

export default function Button(theme?: TTheme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "48px",
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme?.palette?.grey![800],
          boxShadow: theme?.customShadows.z8,
          "&:hover": {
            backgroundColor: theme?.palette?.grey![400],
          },
        },
        containedPrimary: {
          boxShadow: theme?.customShadows.primary,
        },
        containedSecondary: {
          boxShadow: theme?.customShadows.secondary,
        },
        containedInfo: {
          boxShadow: theme?.customShadows.info,
        },
        containedSuccess: {
          boxShadow: theme?.customShadows.success,
        },
        containedWarning: {
          boxShadow: theme?.customShadows.warning,
        },
        containedError: {
          boxShadow: theme?.customShadows.error,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme?.palette?.grey![500]!, 0.32)}`,
          "&:hover": {
            backgroundColor: theme?.palette?.action?.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme?.palette?.action?.hover,
          },
        },
      },
    },
  };
}
