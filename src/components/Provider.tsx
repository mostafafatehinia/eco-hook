"use client";
import { createContext, useEffect, useState } from "react";

import { useSharedSimpleState } from "@/hooks";
import { getThemeStorage } from "@/utils";

import { AuthContextType, ProviderProps, ThemeContextType } from "./types";

export const AuthContext = createContext<AuthContextType>({
  user: {
    username: "",
    password: "",
  },
  setUser: () => undefined,
});
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => undefined,
});

export const Provider = ({ children }: ProviderProps) => {
  const [user, setUser] = useSharedSimpleState();
  const [theme, setTheme] = useState(getThemeStorage());

  useEffect(() => {
    if (
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};
