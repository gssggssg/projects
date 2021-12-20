import * as React from "react";
import { connect } from "react-redux";
import Food from "./food";
import "./index.scss";

interface Props {
  snake: string;
};

const Snake = (props: Props) => {
  return (
    <div className="GluttonousSnake">
      <div className="stage">
        <div className="snake">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Food />
      </div>
      <div className="scoreboard">
        <div>SCORE : <span>0</span></div>
        <div>Level : <span>1</span></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { snake: string }) => ({
  snake: state.snake,
});

export default connect(mapStateToProps)(Snake);