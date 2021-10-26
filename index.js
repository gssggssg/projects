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

const theBoard = document.getElementsByClassName("theBoard")[0];
const theBoardLi = [];
function theBoardFn() {
  let newUl;
  for (let index = 0; index < 16; index++) {
    // 创建一个 ul 节点
    newUl = document.createElement("ul");
    for (let index1 = 0; index1 < 16; index1++) {
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
  for (let index = 0; index < theBoardUl.length; index++) {
    theBoardLi[index][15].style.border = "none";
    theBoardLi[15][index].style.border = "1px solid transparent";
  }
}


/* 
  添加棋子
*/
function chessPiecesFn() {
  let newDiv;
  for (let index = 0; index < 16; index++) {
    for (let index1 = 0; index1 < 16; index1++) {
      newDiv = document.createElement("div")
      newDiv.className = "chessPieces";
      theBoardLi[index][index1].appendChild(newDiv);
    }
  }
}


/* 
  改变棋子颜色
*/

function chessPiecesColorFn(chessPiecesColor) {
  // 获取所有的棋子节点
  const chessPieces = theBoard.querySelectorAll(".chessPieces");
  chessPieces.forEach(
    (item) => {
      item.onclick = () => {
        if (item.className !== "chessPieces") {
          return;
        }
        item.classList.add(chessPiecesColor)
        if (chessPiecesColor === 'White') {
          chessPiecesColor = 'black';
        } else if (chessPiecesColor === 'black') {
          chessPiecesColor = 'White';
        }
      }
    }
  )
}


// 给每个棋子标号码

/*
  判断输赢 
  @游戏规则
*/
// 横着赢法
function gameRule() {

  let wins = [];
  // 有多少种方法
  let winsNums = [];
  let winsNum = 0;
  let rowNum = 0;

  // 每一行的赢法赢法
  let colArr = [];
  let rowArr = [];

  for (let col = 0; col < 16; col++) {

    for (let row = 0; row < 16; row++) {

      colArr[row] = [];

      for (let index = rowNum; index < (rowNum+5); index++) {
        console.log("index",index)
        console.log("rowNum",rowNum)
        colArr[row].push(winsNum);

      }

      winsNums.push(winsNum++);
    }

    wins.push(colArr);

  }

  console.log(wins)

  return wins;
}

// 绘制棋盘
theBoardFn();
// 绘制棋子
chessPiecesFn()

/*
  改变棋子颜色
    参数 第一次棋子颜色
*/
chessPiecesColorFn("White");


gameRule();

// 定时器
console.timeEnd("time")