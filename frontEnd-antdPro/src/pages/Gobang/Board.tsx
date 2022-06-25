import React from 'react';
import { boardLength, piecesArr } from './drawing'
import styles from "./index.module.less";

const Gobang: React.FC = () => {
  return (
    <div className={styles.board}>
      {/* 渲染棋盘的线 */}
      <div className={styles.boardBox}>
        {
          boardLength().map(
            (boardCol, index) => <span key={index} className={styles.boardCol}>
              {
                boardLength().map(
                  (boardItem, indexA) => <span key={indexA} className={styles.boardItem}></span>
                )
              }
            </span>
          )
        }
      </div>
      {/* 渲染棋子 */}
      <div className={styles.piecesBox}>
        {
          piecesArr().map(
            (item, index) => {
              return <div key={index} className={styles.piecesCol}>
                {item.map(
                  (itemA, indexA) => {
                    return <div key={indexA} className={styles.piecesItem}>
                      {itemA}
                    </div>
                  }
                )}
              </div>
            }
          )
        }
      </div>
    </div>
  );
};

export default Gobang;
