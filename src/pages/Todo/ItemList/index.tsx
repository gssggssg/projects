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
  const switchMatter = (value: { title: string; id: string; value: string }):
    void => {
    props.dispatch({
      type: "todo/updata",
      payload: { data: todoData, isEdit: true, currentData: value },
    });
  };
  return (
    <div>
      <ul>
        {
          todoData?.map(
              (item: { title: string, id: string, value: string }):
                JSX.Element => {
                return (<li key={item.id} onClick={() => switchMatter(item)}>
                  <span>{item.title}</span>
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