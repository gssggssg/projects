const express = require('express');
// 路由模块化
const router = express.Router();
// 引入控制器
const userController = require('../controller/user');
// 引入token校验
const authMiddleware = require('../middleware/admin/auth.middleware');

router.post('/add', userController.addUser); // 添加用户
router.post('/login', userController.loginUser); // 用户登录
router.get('/get', authMiddleware, userController.getUser); // 获取用户信息

module.exports = router;