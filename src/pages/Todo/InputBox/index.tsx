// import * as React from "react";
import React, { } from 'react';
import { connect } from "react-redux";
import "./index.scss";

interface Props {
  todoData: {
    [index: number]: {
      id: number,
      value: string;
      title: string;
    },
  },
  todo: any,
  isEdit: boolean,
  dispatch: any,
};

const InputBox = (props: Props): JSX.Element => {
  const { isEdit, todoData } = props;
  const { value, title } = todoData[0];
  const oninput = (event: any): void => {
    const parameter: any = {
      id: 1,
      title: event.target.localName === "input" ? event.target.value : title,
      value: event.target.localName === "textarea" ? event.target.value : value,
    };
    props.dispatch({
      type: "todo/adddata",
      payload: parameter,
    });
  };

  return (
    <>
      <div className='InputBoxTitle'>
        <input
          readOnly={isEdit}
          onInput={oninput}
          value={title}
          placeholder='标题'
        />
      </div>
      <div className='InputBox'>
        <textarea
          readOnly={isEdit}
          onInput={oninput}
          value={value}
          placeholder="内容"
        >
        </textarea>
        <pre><span>{value}</span></pre>
      </div>
    </>
  );
};

const mapStateToProps = (state: { todo: { isEdit: boolean, data: any } }) => ({
  todo: state.todo,
  isEdit: state.todo.isEdit,
  todoData: state.todo.data,
});

export default connect(mapStateToProps)(InputBox);