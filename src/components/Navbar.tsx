"use client";
import { useContext } from "react";

import { LogoutOutlined, MoonFilled, SunOutlined } from "@ant-design/icons";
import { Button, Switch, Tooltip } from "antd";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { useSharedSimpleState } from "@/hooks";
import { setThemeStorage } from "@/utils";

import { ThemeContext } from "./Provider";

export const Navbar = () => {
  const [user, setUser] = useSharedSimpleState();
  const { theme, setTheme } = useContext(ThemeContext);

  const { push } = useRouter();

  const handleLogout = () => {
    push("/");
    setUser({ username: "", password: "" });
    localStorage.removeItem("user");
    Cookies.remove("isLoggedIn");
  };

  const handleChangeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      setThemeStorage("light");
    } else {
      setTheme("dark");
      setThemeStorage("dark");
    }
  };

  return (
    <div className="p-12 flex gap-12 items-center justify-center lg:justify-between flex-wrap shadow-md bg-[#a1cca5] dark:bg-gray-800 dark:text-white">
      <div className="text-2xl font-bold text-gray-800 dark:text-white">
        Welcome to Eco Recycle
      </div>
      <div className="flex items-center gap-12">
        <Switch
          checkedChildren={<SunOutlined />}
          unCheckedChildren={<MoonFilled />}
          defaultChecked
          checked={theme === "light"}
          onChange={handleChangeTheme}
        />
        <div className="text-lg">
          Hi <span className="text-lg font-semibold">{user.username}!</span>
        </div>
        <Tooltip title="Logout">
          <Button
            size="large"
            type="default"
            shape="circle"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          />
        </Tooltip>
      </div>
    </div>
  );
};
