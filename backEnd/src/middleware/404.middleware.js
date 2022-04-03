const HttpEexceptions = require('../exceptions/http.exception')

// 404 异常中间件
const noMatchMiddleware = (req, res, next) => {
    // res.status(404)
    //     .json({
    //         status: 0,
    //         massage: "error",
    //     })
    const noMatchError = new HttpEexceptions(404, '服务器错误', '接口未找到')
    next(noMatchError)
};

module.exports = noMatchMiddleware;