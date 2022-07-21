import React from 'react';
import { connect } from 'umi';
import { Modal, Descriptions, Button } from 'antd';
import Board from './Board'
import Panel from './Panel'
import styles from "./index.module.less";

const Gobang: React.FC = (props: any) => {
  const { VictoryInfo: { isVictory, winner } } = props.gobang;

  const startGame = (rival?: string) => {
    props.dispatch({
      type: "gobang/restart",
      payload: { rival }
    })
  }

  return (
    <div className={styles.gobang}>
      <div className={styles.gobangBoard} >
        <Board />
      </div>
      <div className={styles.gobangPanel}>
        <Panel />
      </div>
      <Modal
        visible={isVictory}
        closable={false}
        keyboard={true}
        footer={false}
      >
        <div className={styles.popupContent}>
          <div className={styles.popupTitle}>
            <h2>胜利</h2>
          </div>
          <div className={styles.popupInfo}>
            <Descriptions>
              <Descriptions.Item label="胜利方">{winner}</Descriptions.Item>
            </Descriptions>
          </div>
          <div className={styles.buttonGroup}>
            <Button onClick={() => startGame('player')}>双人对战</Button>
            <Button onClick={() => startGame('robot')}>人机大战</Button>
          </div>
          <div className={styles.popupFoot}>
            <Button onClick={() => startGame()}>重开</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default connect(({ gobang }: any) => ({ gobang }))(Gobang);