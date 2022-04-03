// t统一错误处理 自定义中间件
const errorhMiddleware = (error, req, res, next) => {
    const status = error.status || 500
    const massage = error.massage || '服务器错误'
    const errors = error.errors || '服务器errors'
    res.status(status).json({ code: 0, massage, errors })
};

module.exports = errorhMiddleware;