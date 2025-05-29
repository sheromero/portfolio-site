import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Sync local state with theme context on mount and when theme changes
  const [mode, setMode] = useState<"light" | "dark">(theme === "dark" ? "dark" : "light");

  useEffect(() => {
    // Update local state when theme context changes externally
    if (theme === "dark" || theme === "light") {
      setMode(theme);
    }
  }, [theme]);

  useEffect(() => {
    // Update theme context when mode changes locally
    if (theme !== mode) {
      setTheme(mode);
    }
  }, [mode, setTheme, theme]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const iconColor = mode === "light" 
    ? "var(--color-primary-foreground, #fff)" 
    : "var(--color-muted-foreground, #888)";

  return (
    <button
      onClick={toggleMode}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="
        rounded-[var(--radius)] 
        w-10 h-10 
        flex items-center justify-center 
        bg-[var(--color-muted)] 
        hover:bg-[var(--color-accent)] 
      "
      type="button"
    >
      <div
        className="transition-transform duration-300 ease-in-out hover:scale-110"
        style={{ color: iconColor }}
      >
        {mode === "light" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </div>
    </button>
  );
}

