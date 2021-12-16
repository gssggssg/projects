import * as React from "react"
import { renderRoutes, RouteConfig } from "react-router-config";
import routes from "./routes";
import Navigation from "./pages/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      {renderRoutes(routes as RouteConfig[])}
    </>
  );
}

export default App;