import * as React from "react";
import { connect } from "react-redux";
import style from "./index.module.scss";
import { FSItemType } from 'src/type';

type FSProps = {
  home: FSItemType,
};

const ItemList: React.FC<FSProps> = ({ home }): JSX.Element => {
  return (
    <div>
      <ul>
        <li>项目一</li>
        <li>项目二</li>
        <li>项目三</li>
        <li>项目四</li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state: { itemFS: FSItemType }) => ({
  home: state.itemFS,
});

export default connect(mapStateToProps)(ItemList);