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
        pd();
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
  let wins = [];
  // 有多少种方法
  let winsNums = [];
  let winsNum = 0;
  for (let col = 0; col < 16; col++) {
    for (let row = 0; row < 16; row++) {
      let lsWinsNum = winsNum;
      wins[winsNum] = [];
      for (let index = 0; index < 5; index++) {
        wins[winsNum].push(lsWinsNum);
        lsWinsNum++;
      }
      winsNums.push(winsNum++);
    }
  }
  wins.splice(-4, 4)
  return wins;
}

// 判断输赢，
function setGameRule() {
  // 获取所有的棋子节点
  const chessPieces = theBoard.querySelectorAll(".chessPieces");
  let node = [];
  let num = 0
  for (let col = 0; col < 16; col++) {
    for (let row = 0; row < 16; row++) {
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
  return node;
}


//在数组中查找所有出现的x，并返回一个包含匹配索引的数组
function findall(a, x) {
  var results = [],
    len = a.length,
    pos = 0;
  while (pos < len) {
    pos = a.indexOf(x, pos);
    if (pos === -1) {//未找到就退出循环完成搜索
      break;
    }
    results.push(pos);//找到就存储索引
    pos += 1;//并从下个位置开始搜索
  }
  return results;
}


function pd() {
  let a = setGameRule();
  let b = gameRule();
  let WhiteChessPieces = findall(a, 1);
  let blackChessPieces = findall(a, 2);
  for (let index = 0; index < gameRule().length; index++) {
    if (WhiteChessPieces.join("|").includes(b[index].join("|"))) {
      alert("白子赢了");
      return
    } else if (blackChessPieces.join("|").includes(b[index].join("|"))) {
      alert("黑子赢了");
      return
    }
  }
}


// 绘制棋盘
theBoardFn();
// 绘制棋子
chessPiecesFn();

/*
  改变棋子颜色
    参数 第一次棋子颜色
*/
chessPiecesColorFn("White");

gameRule();


// 定时器
console.timeEnd("time");
