import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Select } from "../Select";

export const ThemeSwitcher = () => {
  const { systemTheme, themes, theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>();

  useEffect(() => {
    const findCurrentTheme = theme === "system" ? systemTheme : theme;

    setCurrentTheme(findCurrentTheme);
  }, [theme, systemTheme]);

  if (currentTheme) {
    return <Select items={themes} value={currentTheme} onChange={setTheme} />;
  }

  return null;
};
