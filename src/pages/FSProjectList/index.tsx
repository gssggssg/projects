import * as React from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import style from "./index.module.scss";
import { FSItemType } from 'src/type';

type FSProps = {
  home: FSItemType,
};

const FSProjectList: React.FC<FSProps> = ({ home }): JSX.Element => {
  return (
    <div className={style.homeContent}>
      <Card width="50%" height="400px" >
        <div style={{ lineHeight: "384px" }}>扶桑</div>
      </Card>
    </div>
  );
};

const mapStateToProps = (state: { itemFS: FSItemType }) => ({
  home: state.itemFS,
});

export default connect(mapStateToProps)(FSProjectList);