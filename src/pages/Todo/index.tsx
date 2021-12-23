// import * as React from "react";
import React, { } from 'react';
import { connect } from "react-redux";
import { todoType } from "../../store/todo";
import Card from "../../components/Card";
import InputBox from "./InputBox";
import ItemList from "./ItemList";

import "./index.scss";

interface Props {
  todo: todoType,
  dispatch: any,
};

const Todo = (props: Props): JSX.Element => {
  return (
    <Card width="94%">
      <div className="buj">
        <Card width="26%" style={{ minWidth: "200px" }}>
          <ItemList />
        </Card>
        <Card width="70%">
          <InputBox />
        </Card>

      </div>
    </Card>
  );
};

const mapStateToProps = (state: { todo: todoType }) => ({
  todo: state.todo,
});

export default connect(mapStateToProps)(Todo);