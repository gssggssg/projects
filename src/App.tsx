import * as React from "react"
// 引入routes组件
import routes from "./routes";
// 引入包管理工具
import { renderRoutes, RouteConfig } from "react-router-config";

const App = () => {
  return (
    <div>
      <ul>
        <a href="/snake">Snake</a>
        <a href="/gobang">Gobang</a>
      </ul>
      {renderRoutes(routes as RouteConfig[])}
    </div>
  );
}

export default App;