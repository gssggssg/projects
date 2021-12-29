// import * as React from "react";
import React, { } from 'react';
import { connect } from "react-redux";
import { todoType } from "../../store/todo";
import Card from "../../components/Card";
import InputBox from "./InputBox";
import ItemList from "./ItemList";
import Buttons from "./Buttons";
import "./index.scss";

interface Props {
  todo: todoType,
  dispatch: any,
};

const Todo = (props: Props): JSX.Element => {
  return (
    <div className="blackBg">
      <Buttons />
      <div className="todobg">
        <Card className='leftCard' width="20%">
          <ItemList />
        </Card>
        <div style={{ width: "78%" }}>
          <Card width="96%">
            <InputBox />
          </Card>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { todo: todoType }) => ({
  todo: state.todo,
});

export default connect(mapStateToProps)(Todo);