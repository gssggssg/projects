// import * as React from "react";
import React, { } from 'react';
import { connect } from "react-redux";
import "./index.scss";

interface Props {
  todoData: any,
  dispatch: any,
};

const ItemList = (props: Props): JSX.Element => {
  const { todoData } = props;
  const dianji = (e: any): void => {
    // console.log(e.target);
  };
  return (
    <div>
      <ul>
        {
          todoData?.map(
              (item: { title: string }, index: number): JSX.Element => {
                return (<li key={index}>
                  <a onClick={dianji}>{item.title}</a>
                </li>);
              },
          )
        }
      </ul>
    </div>
  );
};

const mapStateToProps = (state: { todo: { data: object[] } }) => ({
  todoData: state.todo.data,
});

export default connect(mapStateToProps)(ItemList);