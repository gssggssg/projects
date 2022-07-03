import { piecesArr } from './drawing'

// 五子棋规规则相关

// 生成所有胜利方式
export const getGameRule = () => {

    // 扁平化棋盘坐标数组
    const flatPiecesArr = piecesArr().reduce(
        (initValue: string[], value: string[]): string[] => {
            return initValue.concat(value)
        }, []
    )

    return flatPiecesArr.reduce(
        (initValue: string[][], value: string) => {
            const row = value.split(',')[0] // 第几行
            const col = value.split(',')[1] // 第几列
            const direction = [
                [0, 1], // 行
                [1, 0], // 列
                [+1, +1], // 撇
                [-1, -1], // 捺
            ]
            const newInitValue = initValue
            direction.forEach(
                (item) => {
                    let newArr: string[] = []
                    if (+row + item[0] * 5 < 0 ||
                        +row + item[0] * 5 > 14 ||
                        +col + item[1] * 5 < 0 ||
                        +col + item[1] * 5 > 14) {
                        return
                    }
                    for (let index = 0; index < 5; index++) {
                        newArr.push(`${+row + item[0] * index},${+col + item[1] * index}`)
                    }
                    newInitValue.push(newArr)
                }
            )
            return newInitValue
        }, []
    )
}

// 判断谁赢谁输掉
export const judgeSuccess = (whitePieces: string[], blackPieces: string[], currentPieces?: string) => {
    console.log(whitePieces, blackPieces, currentPieces)
}