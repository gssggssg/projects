require('dotenv').config({ path: '../../.env' });
const md5 = require('md5'); // 密码加密工具

// 密码 md5 加密
const md5Password = (password) => {
    return new Promise((resolve, reject) => {
        const md5PWD = md5(password + process.env.CONFUSE)
        resolve(md5PWD)
    });
};

// 验证密码是否相等
const verifyPassword = (oldPWD, newPWD) => {
    return new Promise(async (resolve, reject) => {
        if (oldPWD === await md5Password(newPWD)) resolve('true');
        if (oldPWD !== await md5Password(newPWD)) reject('error');
    })
}

module.exports = { md5Password, verifyPassword };

// test 测试
/**
const test = async () => {
    const password = 'test';
    const oldPWD = 'test';
    const testMd5Password = await md5Password(password);
    console.log('测试-md5Password====>', testMd5Password);
    const testVerifyPassword = await verifyPassword(testMd5Password, oldPWD);
    console.log('测试-verifyPassword====>', testVerifyPassword);
}
test();
 */