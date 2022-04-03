// import * as React from "react";
import React, { } from "react";
import { connect } from "react-redux";
import "./index.scss";

interface Props {
  currentData: {
    id: number,
    value: string;
    title: string;
  },
  todo: any,
  isEdit: boolean,
  dispatch: any,
};

const InputBox = (props: Props): JSX.Element => {
  const { isEdit, currentData } = props;
  const { value, title, id } = currentData;
  const oninput = (event: any): void => {
    const parameter: any = {
      id: id,
      title: event.target.localName === "input" ? event.target.value : title,
      value: event.target.localName === "textarea" ? event.target.value : value,
    };
    props.dispatch({
      type: "todo/changeData",
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

const mapStateToProps = (
    state: {
      todo: { isEdit: boolean, currentData: any }
  }) => ({
  todo: state.todo,
  isEdit: state.todo.isEdit,
  currentData: state.todo.currentData,
});

export default connect(mapStateToProps)(InputBox);