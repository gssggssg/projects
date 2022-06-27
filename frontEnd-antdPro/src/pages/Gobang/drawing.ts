
// 生成棋盘数组方法
export const boardLength = (): number[] => {
    let result = [];
    for (let index = 0; index < 15; index++) {
        result.push(index);
    }
    return result;
}

// 生成棋盘数组方法
export const piecesArr = ():string[][] => {
    let result = [];
    for (let row = 0; row < 15; row++) {
        let rowArr = []
        for (let col = 0; col < 15; col++) {
            rowArr.push([row, col].join());
        }
        result.push(rowArr);

    }
    return result;
}