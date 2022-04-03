// 导入路由组件
import Home from "../pages/Home";
import Todo from "../pages/Todo";
import LogIn from "../pages/LogIn";

// 导入路由管理工具
import { RouteConfig } from "react-router-config";

const routes: RouteConfig = [
  {
    path: "/",
    exact: true,
    component: LogIn,
  },
  {
    path: "/home",
    exact: true,
    component: Home,
  },
  {
    path: "/todo",
    exact: true,
    component: Todo,
  },
  {
    path: "/login",
    exact: true,
    component: LogIn,
  },
];

export default routes;