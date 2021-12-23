// import * as React from "react";
import React, { } from 'react';
import { connect } from "react-redux";
import "./index.scss";

interface Props {
  todo: any,
  dispatch: any,
};

const InputBox = (props: Props): JSX.Element => {
  const { todo: { value } } = props;

  const oninput = (event: any): void => {
    props.dispatch({
      type: "todo/updata",
      payload: { value: event.target.value },
    });
  };

  return (
    <div className='InputBox'>
      <textarea onInput={oninput} value={value}>
      </textarea>
      <pre>{value}</pre>
    </div>
  );
};

const mapStateToProps = (state: { todo: any }) => ({
  todo: state.todo,
});

export default connect(mapStateToProps)(InputBox);