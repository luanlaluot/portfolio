import { PropsWithChildren, useMemo } from "react";
// @mui
import { CssBaseline, ThemeOptions } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
//
import customShadows, { TCustomShadow } from "./customShadows";
import GlobalStyles from "./globalStyles";
import componentsOverride from "./overrides";
import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";

// ----------------------------------------------------------------------

type TThemeProvider = {} & PropsWithChildren;
export type TTheme = {
  customShadows: TCustomShadow;
} & ThemeOptions;

export default function ThemeProvider(props: TThemeProvider) {
  const { children } = props;
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme as any);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
