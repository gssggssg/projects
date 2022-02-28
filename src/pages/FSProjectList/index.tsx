import * as React from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import style from "./index.module.scss";
import { FSItemType } from "src/type";
import ItemList from "./ItemList";


type FSProps = {
  home: FSItemType,
};

const FSProjectList: React.FC<FSProps> = ({ home }): JSX.Element => {
  return (
    <div className={style.homeContent}>
      <Card width="50%" height="40px" >
        <>
          <div style={{ lineHeight: "30px" }}>扶桑</div>
          <ItemList />
        </>
      </Card>
    </div>
  );
};

const mapStateToProps = (state: { itemFS: FSItemType }) => ({
  home: state.itemFS,
});

export default connect(mapStateToProps)(FSProjectList);