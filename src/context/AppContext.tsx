/* eslint-disable react-hooks/exhaustive-deps */
import React, { PropsWithChildren, useMemo, useState } from "react";
import { Mode } from "@anatoliygatt/dark-mode-toggle";

// ----------------------------------------------------------------------

type TAppContextProps = {
  themeMode: "light" | "dark";
  toggleTheme?: (mode: Mode) => void;
} & PropsWithChildren;

export const AppContext = React.createContext<TAppContextProps>({
  themeMode: "light",
});
export const useAppContext = () => React.useContext(AppContext);

export default function AppProvider(props: any) {
  const [themeMode, setThemeMode] = useState<Mode>("light");

  const onToggleThemeMode = (mode: Mode) => {
    setThemeMode(mode);
  };

  const value = useMemo(() => {
    return {
      themeMode: themeMode,
      toggleTheme: onToggleThemeMode,
    };
  }, [themeMode]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

// ----------------------------------------------------------------------
