import * as React from "react";
import { connect } from "react-redux";
import Food from "./food";
import "./index.scss";

interface snake {
  score: number,
  level: number,
};

interface Props {
  snake: snake,
  dispatch: any,
};

const Snake = (props: Props): JSX.Element => {
  const { score, level } = props.snake;
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
        <div>SCORE : <span>{score}</span></div>
        <div>Level : <span>{level}</span></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { snake: snake }) => ({
  snake: state.snake,
});

export default connect(mapStateToProps)(Snake);