import * as React from "react";
import { connect } from "react-redux";
import Food from "./food";
import styles from "./index.module.scss";
import { SnakeType } from 'src/type';
import { AnyAction } from "redux";

interface Props {
  snake: SnakeType,
  dispatch: React.Dispatch<AnyAction>,
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

const mapStateToProps = (state: { snake: SnakeType }) => ({
  snake: state.snake,
});

export default connect(mapStateToProps)(Snake);