import React from 'react';
import { Card } from 'antd';
import Board from './Board'
import styles from "./index.module.less";

const Gobang: React.FC = () => {
  return (
    <div className={styles.gobang}>
      <Board />
    </div>
  );
};

export default Gobang;
