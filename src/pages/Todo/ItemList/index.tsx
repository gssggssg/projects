// import * as React from "react";
import React, { } from 'react';
import { connect } from "react-redux";
import "./index.scss";

interface Props {
  dispatch: any,
};

const ItemList = (props: Props): JSX.Element => {
  return (
    <>
      <div>
        <ul>
          <a>第一项</a>
          <a>第二项</a>
          <a>第三项</a>
          <a>第四项</a>
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state: { todo: any }) => ({
  todo: state.todo,
});

export default connect(mapStateToProps)(ItemList);