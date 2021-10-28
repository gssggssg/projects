/*
  思路：
    1. 先画出棋盘。
    2. 可以点击下子。
    3. 设置游戏规则。
    3. 实现电脑下棋。
    4. 增加一点游戏性，倒计时，下棋动画之类的。
*/


/* 
  绘制棋盘
*/
console.time("time")

// 判断游戏是否进行中
let Game = true;

// 棋盘的节点
const theBoard = document.getElementsByClassName("theBoard")[0];

// 棋盘上的棋格节点
const theBoardLi = [];


/*
  绘制棋盘
*/
function theBoardFn() {
  let newUl;
  for (let index = 0; index < 15; index++) {
    // 创建一个 ul 节点
    newUl = document.createElement("ul");
    for (let index1 = 0; index1 < 15; index1++) {
      // 将li插入到 ul 中
      newUl.appendChild(document.createElement("li"));
    }
    // 将ui插入到棋盘中
    theBoard.appendChild(newUl);
  }

  // 获取棋盘中的ul
  const theBoardUl = theBoard.getElementsByTagName("ul");

  // 添加右边和最下边的 li 
  for (let index = 0; index < theBoardUl.length; index++) {
    theBoardLi[index] = theBoardUl[index].getElementsByTagName("li");
  }

  // 添加最右边和最下边的 li 边框看不见
  for (let index = 0; index < 15; index++) {
    theBoardLi[index][14].style.border = "1px solid transparent";
    theBoardLi[14][index].style.border = "1px solid transparent";
  }
}


/* 
  添加棋子
*/
function chessPiecesFn() {
  let newDiv;
  for (let index = 0; index < 15; index++) {
    for (let index1 = 0; index1 < 15; index1++) {
      newDiv = document.createElement("div")
      newDiv.className = "chessPieces";
      theBoardLi[index][index1].appendChild(newDiv);
    }
  }
}


/* 
  下棋反馈改变棋子颜色
*/
function chessPiecesColorFn(chessPiecesColor) {
  chessPieces.forEach(
    (item, index) => {
      item.onclick = () => {
        // 判断棋子和游戏是否存在
        if (item.className !== "chessPieces" || !Game) {
          return;
        }
        item.classList.add(chessPiecesColor)
        // 每次下棋都会判断是否胜利
        judgeSuccess(index);
        // 玩家下完后，将触发 电脑 下棋
        chessAI(index, chessPiecesColor)
        if (chessPiecesColor === 'White') {
          chessPiecesColor = 'black';
        } else if (chessPiecesColor === 'black') {
          chessPiecesColor = 'White';
        }

      }
    }
  )
}


/*
  判断输赢 
  @游戏规则
    参数 ：theRanksOf 行列大小
*/

function gameRule(theRanksOf) {

  // 一共有多少种胜利方法
  let wins = [];

  // 有多少种方法
  let winsNums = [];

  // 
  let winsNum = 0;

  // 每一列胜利的方法
  for (let col = 0; col < 15; col++) {  // 列
    for (let row = 0; row < 15; row++) {  // 行
      let lsWinsNum = winsNum;
      wins[winsNum] = [];
      for (let index = 0; index < 5; index++) {
        if ((col * 15 + 0) <= winsNum && winsNum < (col * 15 + 11)) {
          wins[winsNum].push(lsWinsNum);
        } else {
          break;
        }
        lsWinsNum++;
      }
      winsNums.push(winsNum++);
    }
  }

  winsNums = [];
  winsNum = 0;
  wins.splice(-4, 4);

  // 每一行胜利的方法
  for (let index1 = 0; index1 < 15; index1++) { // 每一列
    for (let index = 0; index < 226; index += 15) { // 每一行
      winsNums[winsNum] = [];
      for (let index2 = 0; index2 < 5; index2++) {
        if (((index + index1) + (index2 * 15)) <= 225) {
          winsNums[winsNum].push((index + index1) + (index2 * 15))
        } else {
          break;
        }
      }
      wins.push(winsNums[winsNum]);
      winsNum++
    }
  }
  winsNums = [];
  winsNum = 0;

  // 每一撇胜利的方法
  for (let index1 = 0; index1 < 15; index1++) { // 每一列
    for (let index = 0; index < 226; index += 15) { // 每一行
      winsNums[winsNum] = [];
      for (let index2 = 0; index2 < 5; index2++) {
        if (((index + index1) + (index2 * 15) + index2) <= 225) {
          winsNums[winsNum].push((index + index1) + (index2 * 15) + index2)
        } else {
          break;
        }
      }
      wins.push(winsNums[winsNum]);
      winsNum++
    }
  }
  winsNums = [];
  winsNum = 0;

  const winsArr = [4, 3, 2, 1, 0]

  // 每一撇胜利的方法
  for (let index1 = 0; index1 < 15; index1++) { // 每一列
    for (let index = 0; index < 226; index += 15) { // 每一行
      winsNums[winsNum] = [];
      for (let index2 = 0; index2 < 5; index2++) {
        if (((index + index1 + winsArr[index2]) + (index2 * 15)) <= 220) {
          winsNums[winsNum].push((index + index1 + winsArr[index2]) + (index2 * 15))
        } else {
          break;
        }
      }
      wins.push(winsNums[winsNum]);
      winsNum++
    }
  }
  winsNums = [];
  winsNum = 0;

  // 优化代码
  // const winsArr = [4, 3, 2, 1, 0]
  // let sz = [
  //   ['((col * 15 + 0) <= winsNum && winsNum < (col * 15 + 11))', 15, 1, 'lsWinsNum'],
  //   ['((index + index1) + (index2 * 15))', 226, 15],
  //   ['((index + index1) + (index2 * 15) + index2)', 226, 15],
  //   ['((index + index1 + winsArr[index2]) + (index2 * 15))', 226, 15],
  // ]

  // for (let indexs = 0; indexs < sz.length; indexs++) {
  //   for (let index = 0; index < theRanksOf; index++) {
  //     for (let index1 = 0; index1 <= sz[indexs][1]; index1 += sz[indexs][2]) {
  //       let lsWinsNum = winsNum;
  //       winsNums[winsNum] = [];
  //       for (let index2 = 0; index2 < 5; index2++) {
  //         if (eval(sz[indexs][0]) <= 225) {
  //           winsNums[winsNum].push(eval(sz[indexs][3] || sz[indexs][0]))
  //         } else {
  //           break;
  //         }
  //       }
  //       wins.push(winsNums[winsNum]);
  //       winsNum++
  //     }
  //   }

  //   winsNums = [];
  //   winsNum = 0;
  // }

  // 赛选出正确的赢法
  wins = wins.filter(
    (item) => { return item.length === 5 }
  )
  return wins;
}

// 查找指定数组中的值，返回所查找到结果的数组
function toFindThe(value) {

  let node = [];
  let num = 0

  // 检查已下的棋子位置
  for (let col = 0; col < 15; col++) {
    for (let row = 0; row < 15; row++) {
      if (chessPieces[num].className === "chessPieces White") {
        node[num] = 1;
      } else if (chessPieces[num].className === "chessPieces black") {
        node[num] = 2;
      } else if (chessPieces[num].className === "chessPieces") {
        node[num] = null;
      }
      num++;
    }
  }

  // 存放结果
  let nawArr = [];
  // 存放从迪哥开始查找的值
  let pos = 0;
  while (pos < node.length) {
    pos = node.indexOf(value, pos);
    if (pos === -1) {  // 没有结果退出循环
      break;
    }
    nawArr.push(pos);
    pos++;
  }
  return nawArr;
}


/*
  判断胜利并触发事件
    参数 piecesSite 当前棋子的位置
*/
function judgeSuccess(piecesSite) {
  // 白字的数组
  let WhiteChessPieces = toFindThe(1);
  // 黑子的数组
  let blackChessPieces = toFindThe(2);

  // 场上少于五颗棋子不进入检查
  if (WhiteChessPieces.length < 5 && blackChessPieces.length < 5) {
    return;
  }

  // 当前所下棋子有多少种赢法
  let piecesSites = gameRuleValue.filter(
    (item) => {
      // 检查当前棋子在赢法库中有多少种
      return item.includes(piecesSite)
    }
  );

  // 检查是否胜利函数
  function victoryFn(PiecesColor) {
    return piecesSites.map(
      (item, index) => {
        let check = [];
        return check[index] = item.map(
          (item1) => {
            return PiecesColor.includes(item1);
          }
        ).includes(false);
      }
    ).includes(false);
  }

  if (victoryFn(WhiteChessPieces)) {
    alert("白子胜利");
    Game = false;
  } else if (victoryFn(blackChessPieces)) {
    alert("黑子胜利");
    Game = false;
  }
}


// 机器人

/*
  1. 先检测 玩家差多少棋子胜利
  2. 阻止玩家胜利
  3. 寻找取得胜利最多的方法
  4. 下胜率最高的步骤。
*/

function chessAI(piecesSite, chessPiecesColor) {
  if (!Game) {
    return;
  }

  // 白字的数组
  let WhiteChessPieces = toFindThe(1);
  // 黑子的数组
  let blackChessPieces = toFindThe(2);

  // 当前所下棋子有多少种赢法
  let piecesSites = gameRuleValue.filter(
    (item) => {
      // 检查当前棋子在赢法库中有多少种
      return item.includes(piecesSite);
    }
  );

  // 棋盘上的棋子编号赋值
  if (chessPiecesColor === 'White') {
    piecesNode[piecesSite] = true;  // 白色棋子为 true
  } else if (chessPiecesColor === 'black') {
    piecesNode[piecesSite] = false; // 黑子棋子为 false
  }


  // 检查
  let feasible = []
  for (let index = 0; index < piecesSites.length; index++) {
    feasible[index] = []
    for (let index1 = 0; index1 < piecesSites[index].length; index1++) {
      feasible[index][index1] = piecesNode[piecesSites[index][index1]];
    }
  }

  // 检查当前所下的子可以赢的位置
  let canPlayChess = feasible.filter(
    (item) => {
      return !item.includes(false);
    }
  )

  // 检查数组中出现数字最高的数字
  // console.log(canPlayChess)
  // function a() {
  //   return
  // }

  // 查询白色棋子最多的方法
  let trueNum;
  let trueArr = [];

  for (let index = 0; index < canPlayChess.length; index++) {
    trueNum = 0
    for (let index1 = 0; index1 < canPlayChess[index].length; index1++) {
      if (canPlayChess[index][index1] === true) {
        trueNum++
      }
    }
    trueArr.push(trueNum);
  }

  // 返回最大值
  let arrayMax = Function.prototype.apply.bind(Math.max, null);

  // 进行排序，选择白子子数最多的那个方法下棋
  // 应该阻止这个
  let thePlayChes = canPlayChess[trueArr.indexOf(arrayMax(trueArr))]

  // 检查当前所下的子可以赢的位置
  let thePlayChess1 = thePlayChes.filter(
    (item) => {
      return typeof (piecesNode[item]) === "number";
    }
  )

  let AIthePlayChess = thePlayChess1[Math.floor(Math.random() * thePlayChess1.length)]

  // 改变当前棋子颜色
  chessPieces[sml].classList.add('black');
  piecesNode[sml] = false;
  // 检查当前棋子是否胜利
  judgeSuccess(sml);
  // 触发玩家下棋
  chessPiecesColorFn('White');

}



// 棋盘大小
let theRanksOf = 15;

// 绘制棋盘
theBoardFn();

// 绘制棋子
chessPiecesFn();

// 获取所有的棋子节点
const chessPieces = theBoard.querySelectorAll(".chessPieces");

// 有多少种赢法,初始化加载赢的方法
const gameRuleValue = gameRule(theRanksOf);

let piecesNode = [];
let piecesNodeNum = 0
for (let index = 0; index < 15; index++) {
  for (let index1 = 0; index1 < 15; index1++) {
    piecesNode.push(piecesNodeNum)
    piecesNodeNum++
  }
}


/*
  改变棋子颜色
    参数 第一次棋子颜色
*/
chessPiecesColorFn("White");

// 定时器
console.timeEnd("time");