const express = require('express');
// 路由模块化
const router = express.Router();
// 引入控制器
const articleController = require('../controller/article');
// 引入token校验
const authMiddleware = require('../middleware/admin/auth.middleware');

router.post('/add', authMiddleware, articleController.addArticle); // 添加文章

module.exports = router;