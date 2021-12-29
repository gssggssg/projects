import * as React from "react";
import { connect } from "react-redux";
import { renderRoutes, RouteConfig } from "react-router-config";
import routes from "./routes";
import Navigation from "./pages/Navigation";
import Theme from "./components/Themes";

const App = (props: any) => {
  const { theme } = props.global;
  return (
    <Theme theme={theme === "bright" ? "bright" : "dark"}>
      <>
        <Navigation />
        {renderRoutes(routes as RouteConfig[])}
      </>
    </Theme>
  );
};

const mapStateToProps = (state: any) => ({
  global: state.global,
});

export default connect(mapStateToProps)(App);