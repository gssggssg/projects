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
  // 获取所有的棋子节点
  const chessPieces = theBoard.querySelectorAll(".chessPieces");
  chessPieces.forEach(
    (item, index) => {
      item.onclick = () => {
        // 判断棋子和游戏是否存在
        if (item.className !== "chessPieces" || !Game) {
          return;
        }
        item.classList.add(chessPiecesColor)
        if (chessPiecesColor === 'White') {
          chessPiecesColor = 'black';
        } else if (chessPiecesColor === 'black') {
          chessPiecesColor = 'White';
        }
        // 每次下棋都会判断是否胜利
        JudgeSuccess(index);
      }
    }
  )
}


/*
  判断输赢 
  @游戏规则
*/
// 每一列的赢法
function gameRule() {

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

  // 赛选出正确的赢法
  wins = wins.filter(
    (item) => { return item.length === 5 }
  )
  return wins;
}

// 查找指定数组中的值，返回所查找到结果的数组
function ToFindThe(arr, value) {
  // 存放结果
  let nawArr = [];
  // 存放从迪哥开始查找的值
  let pos = 0;
  while (pos < arr.length) {
    pos = arr.indexOf(value, pos);
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
function JudgeSuccess(piecesSite) {
  // 获取所有的棋子节点
  const chessPieces = theBoard.querySelectorAll(".chessPieces");

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
      num++
    }
  }

  // 白字的数组
  let WhiteChessPieces = ToFindThe(node, 1);
  // 黑子的数组
  let blackChessPieces = ToFindThe(node, 2);

  // 场上少于五颗棋子不进入检查
  if (WhiteChessPieces.length < 5 && blackChessPieces.length < 5) {
    return;
  }

  // 当前所下棋子有多少种赢法
  let piecesSites = gameRuleValue.filter(
    (item) => {
      return item.includes(piecesSite)
    }
  );

  // 检查是否胜利函数
  function victoryFn(PiecesColor) {
    return piecesSites.map(
      (item, index) => {
        let check = []
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

// 绘制棋盘
theBoardFn();

// 绘制棋子
chessPiecesFn();

// 有多少种赢法,初始化加载赢的方法
let gameRuleValue = gameRule();

/*
  改变棋子颜色
    参数 第一次棋子颜色
*/
chessPiecesColorFn("White");

// 定时器
console.timeEnd("time");