// 验证数据
const validator = require('validator');

// 用户注册 - 添加用户
const addUserValidata = (data) => {
    const { userName, passWord, email } = data;
    const errors = {};
    if (validator.isEmpty(userName)) errors.userName = '用户名必填';
    if (validator.isEmpty(passWord)) errors.passWord = '密码必填';
    if (!validator.isEmpty(email) && !validator.isEmail(email)) errors.email = '邮箱格式不对';
    return { through: !Object.keys(errors).length, errors }; // 返回错误数组长度和错误数组
};

// 登录验证 
const loginUserValidata = (data) => {
    const { userName, passWord } = data;
    const errors = {};
    if (validator.isEmpty(userName)) errors.userName = '用户名必填';
    if (validator.isEmpty(passWord)) errors.passWord = '密码必填';
    return { through: !Object.keys(errors).length, errors }; // 返回错误数组长度和错误数组
};

// 获取用户
const getUserValidata = (data) => {
    const { userName, passWord } = data;
    const errors = {};
    if (validator.isEmpty(userName)) errors.userName = '用户名必填';
    if (validator.isEmpty(passWord)) errors.passWord = '密码必填';
    return { through: !Object.keys(errors).length, errors }; // 返回错误数组长度和错误数组
};

module.exports = { getUserValidata, loginUserValidata, addUserValidata };