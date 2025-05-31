import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState<"light" | "dark">(theme === "dark" ? "dark" : "light");

  useEffect(() => {
    if (theme === "dark" || theme === "light") {
      setMode(theme);
    }
  }, [theme]);

  useEffect(() => {
    if (theme !== mode) {
      setTheme(mode);
    }
  }, [mode, setTheme, theme]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const colors = {
    light: {
      icon: "var(--primary-foreground, #232220)",
      bg: "var(--muted, #e6e6e6)",
      bgHover: "var(--accent, #d0d0d0)",
    },
    dark: {
      icon: "var(--primary-foreground, #f4f1ed)",
      bg: "var(--muted, #4e4c4f)",
      bgHover: "var(--accent, #6e6c70)",
    },
  };

  const currentColors = mode === "light" ? colors.light : colors.dark;

  return (
    <button
      onClick={toggleMode}
      aria-label="Toggle theme"
      title="Toggle theme"
      type="button"
      className="
        w-9 h-9
        rounded-[var(--radius)]
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
      "
      style={{
        backgroundColor: "transparent",
        color: currentColors.icon,
      }}
    >
      {mode === "light" ? (
        <Sun className="h-5 w-5 text-foreground" />
      ) : (
        <Moon className="h-5 w-5 text-foreground" />
      )}
    </button>
  );
}