import React from 'react';
import { connect } from 'umi';
import styles from "./index.module.less";

// 右边面板菜单
const Panel: React.FC = (props: any) => {
  const { nextChessPiece } = props.gobang;

  // 棋子颜色
  const colorPiece = {
    white: "白色",
    black: "黑色",
  }

  console.log(nextChessPiece);

  return (
    <div className={styles.panelBox}>
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
    </div>
  );
};

// export default Gobang;
export default connect(({ gobang }: any) => ({ gobang }))(Panel);