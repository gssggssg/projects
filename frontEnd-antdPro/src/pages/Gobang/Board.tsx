import React, { useEffect } from 'react';
import { connect } from 'umi';
import { boardLength, piecesArr } from './drawing'
import { getGameRule, judgeSuccess } from './rules';
import styles from './index.module.less';

const Board: React.FC = (props: any) => {

  const { whitePieces, blackPieces, nextChessPiece } = props.gobang;

  // 初始化棋盘
  useEffect(
    () => {
      getGameRule()
    }, []
  )

  // 每次下棋，触发检查函数
  useEffect(
    () => { judgeSuccess(whitePieces, blackPieces) }, [whitePieces, blackPieces]
  )

  //  下棋触发函数
  const playChess = (coordinate: string) => {
    let chessPieces: {
      piece: string;
      data: string[];
    } = {
      piece: 'whitePieces',
      data: []
    }
    if (nextChessPiece === "white") {
      chessPieces.piece = 'whitePieces'
      chessPieces.data = whitePieces
    }
    if (nextChessPiece === "black") {
      chessPieces.piece = 'blackPieces'
      chessPieces.data = blackPieces
    }
    chessPieces['data'].push(coordinate)
    // 去重
    const newPieces = Array.from(new Set(chessPieces.data))
    props.dispatch({
      type: "gobang/update",
      payload: {
        [chessPieces['piece']]: newPieces,
        nextChessPiece: nextChessPiece === "white" ? "black" : 'white'
      },
    })
  }

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
            (item, XAxis) => {
              return <div key={XAxis} className={styles.piecesCol}>
                {item.map(
                  (itemA) => {
                    return <div key={itemA} className={styles.piecesItem}>
                      {
                        blackPieces.includes(itemA) ? <span className={styles.black}></span> :
                          whitePieces.includes(itemA) ? <span className={styles.white}></span> :
                            <span onClick={() => playChess(itemA)}></span>
                      }
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

// export default Gobang;
export default connect(({ gobang }: any) => ({ gobang }))(Board);