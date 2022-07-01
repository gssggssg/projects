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

  return (
    <div className={styles.panelBox}>
      <div className={styles.roundTip}>
        <span>
          {colorPiece[nextChessPiece]}
        </span>
        <span></span>

      </div>

    </div>
  );
};

// export default Gobang;
export default connect(({ gobang }: any) => ({ gobang }))(Panel);