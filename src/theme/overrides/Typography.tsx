// ----------------------------------------------------------------------

import { Spacing } from "@mui/system";
import { TTheme } from "theme";

export default function Typography(theme?: TTheme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: (theme?.spacing as Spacing)(2),
        },
        gutterBottom: {
          marginBottom: (theme?.spacing as Spacing)(1),
        },
      },
    },
  };
}
