// ----------------------------------------------------------------------

import { TTheme } from "theme";

export default function Paper(_?: TTheme) {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  };
}
