// ----------------------------------------------------------------------

import { TTheme } from "theme";

export default function Autocomplete(theme?: TTheme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme?.customShadows.z20,
        },
      },
    },
  };
}
