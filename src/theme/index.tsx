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
import typography from "./typography";
import shadows from "./customShadows";
import { useAppContext } from "context/AppContext";

// ----------------------------------------------------------------------

type TThemeProvider = {} & PropsWithChildren;
export type TTheme = {
  customShadows: TCustomShadow;
} & ThemeOptions;

export default function ThemeProvider(props: TThemeProvider) {
  const { children } = props;
  const { themeMode } = useAppContext();
  const isLight = themeMode === "light";
  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      shape: { borderRadius: 6 },
      typography,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight]
  );

  const theme = createTheme(themeOptions as any);
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
