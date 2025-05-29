import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null
    console.log("[ThemeProvider] Initial theme from localStorage:", stored)
    // Only accept 'light' or 'dark', fallback to defaultTheme
    return stored === "dark" || stored === "light" ? stored : defaultTheme
  })

  useEffect(() => {
    console.log("[ThemeProvider] useEffect triggered, theme =", theme)

    if (typeof window === "undefined") {
      console.log("[ThemeProvider] window undefined, skipping")
      return
    }

    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
  }, [theme])

  const setTheme = (newTheme: Theme) => {
    console.log("[ThemeProvider] setTheme called with:", newTheme)

    if (newTheme !== "light" && newTheme !== "dark") {
      console.warn("[ThemeProvider] Invalid theme:", newTheme)
      return
    }

    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem(storageKey, newTheme)
      }
    } catch (e) {
      console.warn("[ThemeProvider] Failed to set localStorage:", e)
    }

    setThemeState((prev) => {
      if (prev === newTheme) {
        console.log("[ThemeProvider] theme unchanged, skipping state update")
        return prev
      }
      console.log("[ThemeProvider] theme updated from", prev, "to", newTheme)
      return newTheme
    })
  }

  const value = {
    theme,
    setTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

