import { User } from "@/components/types";

export const setUserStorage = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserStorage = () => {
  try {
    const user = localStorage.user;
    return JSON.parse(user);
  } catch (error) {
    return { username: "", password: "" };
  }
};

export const setThemeStorage = (theme: "dark" | "light") => {
  localStorage.setItem("theme", theme);
};

export const getThemeStorage = () => {
  try {
    const theme = localStorage.theme;
    return JSON.parse(theme);
  } catch (error) {
    return "light";
  }
};
