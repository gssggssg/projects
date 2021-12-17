import * as React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import routes from "./routes";
import Navigation from "./pages/Navigation";
import About from "./Sml";

const App = () => {
  return (
    <>
      <About />
      <Navigation />
      {renderRoutes(routes as RouteConfig[])}
    </>
  );
};

export default App;