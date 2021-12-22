import * as React from "react";
import { connect } from "react-redux";
import { homeType } from "../../store/home";
import Card from "../../components/Card";
import "./index.scss";

interface Props {
  home: homeType,
  dispatch: any,
};

const Home = (props: Props): JSX.Element => {
  return (
    <div className="homeContent">
      <Card width="50%" height="400px" >
        <div style={{ lineHeight: "400px" }}>这里是首页</div>
      </Card>
    </div>
  );
};

const mapStateToProps = (state: { home: homeType }) => ({
  snake: state.home,
});

export default connect(mapStateToProps)(Home);