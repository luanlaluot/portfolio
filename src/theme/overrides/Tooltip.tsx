// ----------------------------------------------------------------------

import { TTheme } from "theme";

export default function Tooltip(theme?: TTheme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme?.palette?.grey![800],
        },
        arrow: {
          color: theme?.palette?.grey![800],
        },
      },
    },
  };
}
