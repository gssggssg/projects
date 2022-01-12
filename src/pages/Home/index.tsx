import * as React from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import style from "./index.module.scss";
import { HomeType } from 'src/type';

type HomeProps = {
  home: HomeType,
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

const mapStateToProps = (state: { home: HomeType }) => ({
  home: state.home,
});

export default connect(mapStateToProps)(Home);