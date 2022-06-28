import React from 'react';
import { Card } from 'antd';
import Board from './Board'
import Panel from './Panel'
import styles from "./index.module.less";

const Gobang: React.FC = () => {
  return (
    <div className={styles.gobang}>
      <div className={styles.gobangBoard} >
        <Board />
      </div>
      <div className={styles.gobangPanel}>
        <Panel />
      </div>
    </div>
  );
};

export default Gobang;
