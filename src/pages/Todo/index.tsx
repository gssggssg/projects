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
    <div className="bujd">
      <Buttons />
      <div className="buj">
        <Card className='Card' width="20%" style={{ minWidth: "200px" }}>
          <ItemList />
        </Card>
        <div style={{ width: "78%" }}>
          <Card className='Card' width="96%">
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