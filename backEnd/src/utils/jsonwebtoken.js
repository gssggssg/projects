// token 生成与解析

require('dotenv').config({ path: '../../.env' });
const jwt = require('jsonwebtoken');

// jwt 生成token
const sign = (userInfo) => {
    return new Promise((resolve, reject) => {
        const { userName, email } = userInfo
        jwt.sign({ userName, email }, process.env.JWT_SECRET, (error, token) => {
            if (error) reject(error)
            resolve(token)
        })
    });
};

// jwt 解析 token
const verifyToken = async (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) reject(error)
            resolve(decoded)
        })
    });
}

module.exports = { sign, verifyToken };

// test 测试
/**
const test = async () => {
    const userInfo = { userName: 'test', email: 'test@qq.com' }
    const testSign = await sign(userInfo)
    console.log('测试-sign====>', testSign)
    const testVerifyToken = await verifyToken(testSign)
    console.log('测试-verifyToken====>', testVerifyToken)
}
test()
*/