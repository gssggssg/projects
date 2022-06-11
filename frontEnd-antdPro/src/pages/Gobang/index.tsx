import React from 'react';
import { Card } from 'antd';
import styles from "./index.module.less";

const Gobang: React.FC = () => {
  return (
    <div className={styles.home}>
      <Card>
        <div>
          五子棋
        </div>
        <div>
          棋盘
        </div>
      </Card>
    </div>
  );
};

export default Gobang;
