const express = require('express');
// 模块化
const router = express.Router()
// 
const userController = require('../controller/user');

// 获取用户信息
router.get('/get', userController.getUser);
// 用户登录
router.post('/login', userController.loginUser);
// 添加用户
router.post('/add', userController.addUser);

module.exports = router;