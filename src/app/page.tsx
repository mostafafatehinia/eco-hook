"use client";
import { useContext } from "react";

import { MoonFilled, SunOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";
import { Button, Form, Input, Switch, message } from "antd";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { ThemeContext } from "@/components";
import { User } from "@/components/types";
import { useSharedSimpleState } from "@/hooks";
import { setThemeStorage, setUserStorage } from "@/utils";

export default function Login() {
  const [user, setUser] = useSharedSimpleState();
  const { theme, setTheme } = useContext(ThemeContext);

  const { push } = useRouter();

  const [messageApi, contextHolder] = message.useMessage();

  const onFinish: FormProps<User>["onFinish"] = ({ username, password }) => {
    setUser({ username, password });
    setUserStorage({ username, password });

    Cookies.set("isLoggedIn", "true");
    messageApi.open({
      type: "success",
      content: "Successfully logged in!",
    });

    setTimeout(() => {
      push("/dashboard");
    }, 1000);
  };

  const onFinishFailed: FormProps<User>["onFinishFailed"] = () => {
    messageApi.open({
      type: "error",
      content: "Something wrong happend!",
    });
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
    <div className="h-screen flex flex-col">
      <div className="flex justify-end p-12">
        <Switch
          checkedChildren={<SunOutlined />}
          unCheckedChildren={<MoonFilled />}
          defaultChecked
          checked={theme === "light"}
          onChange={handleChangeTheme}
        />
      </div>
      <main className="flex h-full items-center justify-center">
        {contextHolder}
        <div className="bg-white dark:bg-gray-400 p-12 lg:rounded-lg lg:shadow-sm h-full lg:max-h-[300px] w-full lg:w-1/3 space-y-4">
          <div className="text-2xl font-bold text-gray-800 text-center">
            Login
          </div>
          <Form
            name="basic"
            onFinish={onFinish}
            initialValues={user}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<User>
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input size="large" placeholder="Username" autoComplete="on" />
            </Form.Item>

            <Form.Item<User>
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  min: 8,
                  message: "Your password must be at least 8 charachters",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Password"
                autoComplete="on"
              />
            </Form.Item>
            <Form.Item className="w-1/3">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                className="bg-green-500 dark:bg-gray-700"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </main>
    </div>
  );
}
