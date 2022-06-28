import React from 'react';
import { connect } from 'umi';
import styles from "./index.module.less";

// 右边面板菜单
const Panel: React.FC = (props: any) => {
  return (
    <div className={styles.panelBox}>
     
    </div>
  );
};

// export default Gobang;
export default connect(({ gobang }: any) => ({ gobang }))(Panel);