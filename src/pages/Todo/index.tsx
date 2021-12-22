import * as React from "react";
import { connect } from "react-redux";
import { todoType } from "../../store/todo";
import Card from "../../components/Card";
import "./index.scss";

interface Props {
  todo: todoType,
  dispatch: any,
};

const Todo = (props: Props): JSX.Element => {
  return (
    <Card width="50%" height="400px" >
      <>
        <h1>Todo List</h1>
        <div>
          这里是 todo list
        </div>
      </>
    </Card>
  );
};

const mapStateToProps = (state: { todo: todoType }) => ({
  todo: state.todo,
});

export default connect(mapStateToProps)(Todo);