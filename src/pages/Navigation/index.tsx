import React, { } from 'react';
import { connect } from "react-redux";
// import bright from "../../theme/bright.scss";
// import dark from "../../theme/dark.scss";
import "./index.scss";

interface Props {
  navigation: {
    menu: [
      {
        title: string;
        path: string;
      },
    ]
  },
  global: { theme: string };
  dispatch: any,
};

const Navigation = (props: Props): JSX.Element => {
  const { navigation, global } = props;
  const ChangeTheme = (): void => {
    let theme = "dark";
    global.theme === "dark" && (theme = "bright");
    global.theme === "bright" && (theme = "dark");
    props.dispatch({
      type: "global/updata",
      payload: { theme },
    });
  };
  return (
    <nav className="navigation">
      {
        navigation.menu?.length > 0 &&
        navigation.menu?.map((item: { title: string, path: string }) => {
          return (
            <a key={item.path} href={item.path} > {item.title} </a>
          );
        },
        )
      }
      <div className='ChangeTheme' >
        <span className={global.theme === "bright" ? "current" : ""} onClick={ChangeTheme}>明</span>
        <span className={global.theme === "dark" ? "current" : ""} onClick={ChangeTheme}>暗</span>
      </div>
    </nav>
  );
};


const mapStateToProps = (state: any) => ({
  navigation: state.navigation,
  global: state.global,
});

export default connect(mapStateToProps)(Navigation);