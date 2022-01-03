import * as React from "react";
import { connect } from "react-redux";
import Food from "./food";
import { snakeType } from "../../store/snake";
import styles from "./index.module.scss";

interface Props {
  snake: snakeType,
  dispatch: any,
};

const Snake = (props: Props): JSX.Element => {
  const { score, level } = props.snake;
  return (
    <div className={styles.GluttonousSnake}>
      <div className={styles.stage}>
        <div className={styles.snake}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Food />
      </div>
      <div className={styles.scoreboard}>
        <div>SCORE : <span>{score}</span></div>
        <div>Level : <span>{level}</span></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { snake: snakeType }) => ({
  snake: state.snake,
});

export default connect(mapStateToProps)(Snake);