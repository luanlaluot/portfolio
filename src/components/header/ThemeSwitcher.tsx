import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  console.log("theme", theme);

  return (
    <>
      <button
        title={`Toggle theme - current ${theme}`}
        aria-label="ThemeSwitcher"
        onClick={() =>
          setTheme(
            theme === "light" ? "dark" : theme === "system" ? "dark" : "light"
          )
        }
        className="p-2 ml-1 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg dark:text-gray-100"
      >
        {hasMounted && theme === "dark" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </button>
    </>
  );
};

export default ThemeSwitcher;
