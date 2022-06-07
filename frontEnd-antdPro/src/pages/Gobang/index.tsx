import React from 'react';
import { Card } from 'antd';
import styles from "./index.module.less";

const Gobang: React.FC = () => {
  return (
    <div className={styles.home}>
      <Card>
        这里是五子棋页面
      </Card>
    </div>
  );
};

export default Gobang;
