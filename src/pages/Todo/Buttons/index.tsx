// import * as React from "react";
import React, { } from 'react';
import { connect } from "react-redux";
import "./index.scss";

interface Props {
  dispatch: any,
  isEdit: boolean,
};

const Buttons = (props: Props): JSX.Element => {
  const { isEdit } = props;
  const edit = (): void => {
    props.dispatch({
      type: "todo/updata",
      payload: { isEdit: false },
    });
  };
  return (
    <div className='buttons'>
      {isEdit && <button onClick={edit}>编辑</button>}
      <button>保存</button>
    </div>
  );
};

const mapStateToProps = (state: { todo: any }) => ({
  todo: state.todo,
  isEdit: state.todo.isEdit,
});

export default connect(mapStateToProps)(Buttons);