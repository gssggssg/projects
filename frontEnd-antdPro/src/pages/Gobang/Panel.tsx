import React, { useState, useEffect } from 'react';
import { connect } from 'umi';
import { Button } from 'antd';
import styles from "./index.module.less";

// 右边面板菜单
const Panel: React.FC = (props: any) => {
  const { nextChessPiece, isStart } = props.gobang;

  const [playTime, setPlayTime] = useState(60) // 所有下棋时间
  const [thinkingTime, setThinkingTime] = useState(0) // 每次思考时间

  useEffect(
    () => {
      let tick: NodeJS.Timeout
      let newTime = 0
      if (isStart) {
        tick = setInterval(() => {
          setThinkingTime(() => newTime + 1);
          newTime++
        }, 1000);
      }
      return () => clearInterval(tick);
    }, [isStart]
  )

  useEffect(
    () => {
      let tick: NodeJS.Timeout
      let newTime = 60
      if (isStart) {
        tick = setInterval(() => {
          setPlayTime(() => newTime - 1);
          newTime--
        }, 1000);
      }
      return () => clearInterval(tick);
    }, [isStart, nextChessPiece]
  )

  // 棋子颜色
  const colorPiece = {
    white: "白色",
    black: "黑色",
  }

  const update = (payload: Object) => {
    props.dispatch({
      type: "gobang/update",
      payload,
    })
  }

  return (
    <div className={styles.panelBox}>
      <div className={styles.start}>
        {!isStart ? <Button onClick={() => { update({ isStart: true }) }}>开始游戏</Button> : ''}
      </div>
      <div className={styles.roundTip}>
        <div>
          <h3 className={styles.chessTitle}>
            轮到{colorPiece[nextChessPiece]}棋子
          </h3>
          <div className={styles.chessModel}>
            <span className={styles[nextChessPiece]}>
            </span>
          </div>
        </div>
      </div>
      <ul className={styles.panelUl}>
        {/* 倒计时 */}
        <li>
          <p>
            倒计时
          </p>
          <div className={styles.countdown}>
            <div className={styles.timeBox}>
              <time>{playTime}</time>
            </div>
          </div>
        </li>
        <li>
          <p>
            游戏时间
          </p>
          <div className={styles.countdown}>
            <div className={styles.timeBox}>
              <time>{thinkingTime}</time>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default connect(({ gobang }: any) => ({ gobang }))(Panel);