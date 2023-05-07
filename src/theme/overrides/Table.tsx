// ----------------------------------------------------------------------

import { TTheme } from "theme";

export default function Table(theme?: TTheme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme?.palette?.text?.secondary,
          backgroundColor: theme?.palette?.background?.default,
        },
      },
    },
  };
}
