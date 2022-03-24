import * as React from "react";
import { connect } from "react-redux";
import { renderRoutes, RouteConfig } from "react-router-config";
import routes from "./routes";
// import Navigation from "./pages/Navigation";
import Theme from "./components/Themes";

type AppProps = {
  global: { theme: string };
};

const App: React.FC<AppProps> = ({ global }) => {
  // const { theme } = global;
  return (
    <Theme theme={"bright"}>
      <>
        {/* <Navigation /> */}
        {renderRoutes(routes as RouteConfig[])}
      </>
    </Theme>
  );
};

const mapStateToProps = (state: any) => ({
  global: state.global,
});

export default connect(mapStateToProps)(App);