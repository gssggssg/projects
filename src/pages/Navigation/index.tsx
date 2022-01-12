import React, { } from 'react';
import { connect } from "react-redux";
import style from "./index.module.scss";
import { SliceState } from "../../store/navigation";
import { GlobalType } from "../../store/global";
import { AnyAction } from 'redux';

interface Props {
  navigation: SliceState,
  global: GlobalType,
  dispatch: React.Dispatch<AnyAction>,
};

const Navigation: React.FC<Props> = (props: Props): JSX.Element => {
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
    <nav className={style.navigation}>
      {
        navigation.menu?.length > 0 &&
        navigation.menu?.map((item: { title: string, path: string }) => {
          return (
            <a key={item.path} href={item.path} > {item.title} </a>
          );
        })
      }
      <div className={style.ChangeTheme} >
        <span className={global.theme === "bright" ? style.current : ""} onClick={ChangeTheme}>
          明
        </span>
        <span className={global.theme === "dark" ? style.current : ""} onClick={ChangeTheme}>
          暗
        </span>
      </div>
    </nav>
  );
};

const mapStateToProps = (state: { navigation: SliceState; global: GlobalType; }) => ({
  navigation: state.navigation,
  global: state.global,
});

export default connect(mapStateToProps)(Navigation);