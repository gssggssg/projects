// 验证数据
const validator = require('validator');

// 添加用户的数据校验
const addUser = (data) => {
    const { userName, passWord, email } = data;
    const errors = {};
    if (validator.isEmpty(userName)) errors.userName = '用户名必填';
    if (validator.isEmpty(passWord)) errors.passWord = '密码必填';
    if (!validator.isEmpty(email) && !validator.isEmail(email)) errors.email = '邮箱格式不对';
    return { through: !!Object.keys(errors).length, errors }; // 返回错误数组长度和错误数组
};

module.exports = addUser;