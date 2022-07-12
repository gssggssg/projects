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
                    if (+row + item[0] * 4 < 0 ||
                        +row + item[0] * 4 > 14 ||
                        +col + item[1] * 4 < 0 ||
                        +col + item[1] * 4 > 14) {
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

// 判断谁赢谁输
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

// 预判下一步应该下哪里
export const nextStep = (whitePieces: string[], blackPieces: string[], type: string): string => {

    return '0,0'
}

/**
 * 优先级
 * 一步 ： 下一步就胜利 -> 对方下一步就赢
 * 两步： 下两步就胜利 -> 下两步必赢 -> 对方下两步必赢
 *        下两步会被挡，对方下两步会被挡
 */