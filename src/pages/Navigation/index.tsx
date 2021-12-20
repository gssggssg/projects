import * as React from "react";
import { connect } from "react-redux";
import "./index.scss";

interface Props {
  navigation: {
    menu: [
      {
        title: string;
        path: string;
      },
    ]
  }
};

const Navigation = (props: Props): JSX.Element => {
  const { navigation } = props;
  return (
    <nav className="navigation">
      {
        navigation.menu?.length > 0 &&
        navigation.menu?.map(
            (item: { title: string, path: string }) => {
              return (
                <a key={item.path} href={item.path} > {item.title} </a>
              );
            },
        )
      }
    </nav>
  );
};


const mapStateToProps = (state: any) => ({
  navigation: state.navigation,
});

export default connect(mapStateToProps)(Navigation);