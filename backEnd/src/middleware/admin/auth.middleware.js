const { verifyToken } = require('../../utils/jsonwebtoken')
const HttpEexceptions = require('../../exceptions/http.exception')

// 404 异常中间件
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers?.authorization; // 获取权限
    if (!authHeader) {
        return next(new HttpEexceptions(401, '没有找到authorization', '请提供authorization'))
    }
    const tokenHeaderArr = authHeader.split(' '); // 切割token成为数组
    if (tokenHeaderArr[0] !== 'Token') { // 判断类型是否合法
        return next(new HttpEexceptions(401, 'authorization格式错误', '请提供合法authorization类型'))
    }
    if (!tokenHeaderArr[1]) { // 判断是否存在内容
        return next(new HttpEexceptions(401, 'authorization内容不存在', '请提供authorization内容'))
    }

    // 解签验证token
    try {
        const user = await verifyToken(tokenHeaderArr[1])
        if (!user) {
            return next(new HttpEexceptions(401, 'token解析失败', '重试token解析校验'))
        }
        req.user = user;
        return next();
    } catch (error) {
        // verifyToken 解析失败
        return next(new HttpEexceptions(401, 'token解析验证失败', error))
    }
};

module.exports = authMiddleware;