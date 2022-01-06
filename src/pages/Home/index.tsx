import * as React from "react";
import { connect } from "react-redux";
import { homeType } from "../../store/home";
import Card from "../../components/Card";
import style from "./index.module.scss";

type HomeProps = {
  home: homeType,
};

const Home: React.FC<HomeProps> = ({ home }): JSX.Element => {
  return (
    <div className={style.homeContent}>
      <Card width="50%" height="400px" >
        <div style={{ lineHeight: "384px" }}>这里是首页</div>
      </Card>
    </div>
  );
};

const mapStateToProps = (state: { home: homeType }) => ({
  home: state.home,
});

export default connect(mapStateToProps)(Home);