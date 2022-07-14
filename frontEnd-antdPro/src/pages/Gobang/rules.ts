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

// 所有的赢法
const allRuleNum = getGameRule()

// 判断谁赢谁输
export const judgeSuccess = (whitePieces: string[], blackPieces: string[], currentPieces: string) => {
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
export const nextStep = (whitePieces: string[], blackPieces: string[], curPiece: string, nextPiece: string): string => {

    const piecesObj = { whitePieces, blackPieces }

    const result = allRuleNum.map(
        (ruleItem: string[]) => {
            let newItem: Array<string | null> = ruleItem
            ruleItem.forEach(
                (a: string, index: number) => {
                    if (!newItem.length) return
                    if (piecesObj[curPiece + 'Pieces'].includes(a)) {
                        newItem = []
                    }
                    if (piecesObj[nextPiece + 'Pieces'].includes(a)) {
                        newItem[index] = null
                    }
                }
            )
            return newItem.filter(s => s)
        }
    ).filter(s => s.length && s.length !== 5)

    // // 按照优先顺序来排序
    // result.sort((a, b) => a.length - b.length)

    // let aaa = []
    // result.forEach(
    //     (item:Array<string | null> )=>{
  
    //     }
    // )


    console.log('result=========>', result,allRuleNum)

    return '0,0'
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