import React, { useState, useEffect } from 'react';
import { connect } from 'umi';
import { Button } from 'antd';
import styles from "./index.module.less";

// 右边面板菜单
const Panel: React.FC = (props: any) => {
  const { nextChessPiece, isStart } = props.gobang;

  const [playTime, setPlayTime] = useState(60) // 下棋时间

  useEffect(
    () => {
      let tick: NodeJS.Timeout
      let time = 60
      console.log('time')
      if (isStart) {
        tick = setInterval(() => {
          setPlayTime(() => time - 1);
          time--
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
      </ul>
    </div>
  );
};

export default connect(({ gobang }: any) => ({ gobang }))(Panel);