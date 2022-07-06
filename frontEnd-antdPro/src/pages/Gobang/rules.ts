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
                [+1, +1], // 捺
                [+1, -1], // 撇
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
export const judgeSuccess = (whitePieces: string[], blackPieces: string[], currentPieces: string) => {
    let result = {
        isVictory: false,
        winner: ''
    }

    const ruleNum = getGameRule()

    const currentRuleNum = (party: string[]) => ruleNum.filter(
        (item) => {
            return item.includes(currentPieces)
        }
    ).filter(
        (item) => {
            let result = true
            for (let index = 0; index < item.length; index++) {
                if (!party.includes(item[index])) {
                    result = false
                    return false
                }
            }
            return result
        }
    )

    console.log('currentRuleNum====>', currentRuleNum(whitePieces))

    if (currentRuleNum(whitePieces).length) {
        result = {
            isVictory: !!currentRuleNum(whitePieces).length,
            winner: '白色'
        }
    }

    if (currentRuleNum(blackPieces).length) {
        result = {
            isVictory: !!currentRuleNum(blackPieces).length,
            winner: '黑色'
        }
    }

    return result
}