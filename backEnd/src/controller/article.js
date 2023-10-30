const ResponseResult = require('../utils/responseResults');
const Article = require("../models/article");
const {verifyToken} = require("../utils/jsonwebtoken");

/**
 * 文章（博客）操作控制器
 */

// 添加文章（博客）
module.exports.addArticle = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization; // 获取权限
    const tokenHeaderArr = authHeader.split(' '); // 切割token成为数组
    const user = await verifyToken(tokenHeaderArr[1]) || null;
    const {title, slug, describe, body} = req.body; // 获取传过来数据
    const newArticle = await Article.create({userUserName: user.userName, title, describe, body, slug})
    new ResponseResult(newArticle).success(res, 'ARTICLE_ADD_SUCCESS')
  } catch (error) {
    new ResponseResult().fail(res, 'ARTICLE_FAIL')
    next(error)
  }
}