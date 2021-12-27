// import * as React from "react";
import React, { } from 'react';
import { connect } from "react-redux";
import Button from "../../../components/Button";
import "./index.scss";

interface Props {
  dispatch: any,
  isEdit: boolean,
  currentData: {
    [index: number]: {
      id: number,
      value: string;
      title: string;
    }
  }
};

const Buttons = (props: Props): JSX.Element => {
  const { isEdit, currentData } = props;
  const edit = (): void => {
    props.dispatch({
      type: "todo/updata",
      payload: { isEdit: false },
    });
  };
  const save = (): void => {
    props.dispatch({
      type: "todo/saveData",
      payload: { currentData },
    });
  };
  return (
    <div className='buttons'>
      {isEdit && <Button disabled={false} onClick={edit} text={"编辑"} />}
      {!isEdit && <Button disabled={false} onClick={save} text={"保存"} />}
    </div>
  );
};

const mapStateToProps = (state: { todo: any }) => ({
  todo: state.todo,
  isEdit: state.todo.isEdit,
  currentData: state.todo.currentData,
});

export default connect(mapStateToProps)(Buttons);