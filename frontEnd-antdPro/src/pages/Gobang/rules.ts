import { flatPiecesArr } from './drawing'

// 五子棋规规则相关

// 生成所有胜利方式
export const getGameRule = () => {

    return flatPiecesArr().reduce(
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
export const judgeSuccess = (whitePieces: string[], blackPieces: string[], currentPieces: string, allRuleNum: string[][]) => {

    // 胜利对象
    let result = {
        isVictory: false,
        winner: ''
    }

    // 当前所下棋子赢法
    const currentRuleNum = (party: string[]) => allRuleNum.filter(
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

    return result;
}

// 预判下一步应该下哪里
export const nextStep = (whitePieces: string[], blackPieces: string[], curPiece: string, nextPiece: string, allRuleNum: string[][]): string => {
    const piecesObj = { whitePieces, blackPieces }
    const result = allRuleNum.map(
        (ruleItem: string[]) => {
            let isCan = true
            const result = ruleItem.map(
                (a: string) => {
                    if (piecesObj[curPiece + 'Pieces'].includes(a)) {
                        isCan = false
                    }
                    if (piecesObj[nextPiece + 'Pieces'].includes(a)) {
                        return null
                    }
                    return a
                }
            )
            if (!isCan) return ruleItem
            return result.filter(s => s)
        }
    ).filter(s => s.length && s.length !== 5)

    // 按照优先顺序来排序
    result.sort((a, b) => a.length - b.length)

    const ultimately = result.length ? result.filter(
        (item: Array<string | null>) => {
            return item.length === result[0].length
        }
    ).reduce((a, b) => a.concat(b)) : flatPiecesArr().filter(
        (item: string) => {
            return !piecesObj[curPiece + 'Pieces'].includes(item)
        }
    )

    return ultimately[Math.floor(ultimately.length * Math.random())]!
}

// gobang 算法
/**
 * 列出所有胜利的赢法
 * 将列出的
 */



/**
 * 优先级
 * 一步 ： 下一步就胜利 -> 对方下一步就赢
 * 两步： 下两步就胜利 -> 下两步必赢 -> 对方下两步必赢
 *        下两步会被挡，对方下两步会被挡
 */