import * as React from "react";
import { connect } from "react-redux";
import { renderRoutes, RouteConfig } from "react-router-config";
import routes from "./routes";
import Navigation from "./pages/Navigation";

const App = (props: any) => {
  const { theme } = props.global;
  theme === "dark" && import("./theme/dark.scss");
  theme === "bright" && import("./theme/bright.scss");
  return (
    <div className="">
      <Navigation />
      {renderRoutes(routes as RouteConfig[])}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  global: state.global,
});

export default connect(mapStateToProps)(App);