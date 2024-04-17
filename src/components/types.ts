import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ProviderProps {
  children: ReactNode;
}

export type User = {
  username: string;
  password: string;
};

export interface AuthContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export type Theme = "dark" | "light";
export interface ThemeContextType {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}
