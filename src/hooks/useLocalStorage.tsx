import { useState, useEffect } from "react";

// ----------------------------------------------------------------------

export type TDefaultAppStorageValue = {
  themeMode: "light" | "dark";
};

export default function useLocalStorage(
  key: string,
  defaultValue: TDefaultAppStorageValue
) {
  const [settings, setValue] = useState<TDefaultAppStorageValue>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue === null
      ? defaultValue
      : (JSON.parse(storedValue) as TDefaultAppStorageValue);
  });

  useEffect(() => {
    const listener = (e: any) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener("storage", listener);

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key, defaultValue]);

  const setSettings = (newValue: TDefaultAppStorageValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return { settings, setSettings };
}
