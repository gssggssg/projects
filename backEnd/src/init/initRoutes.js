const userRoute = require('../routes/user')

// 初始化路由

const initRoutes = (app) => {
    // 用户路由
    app.use('/api/user', userRoute)
}

module.exports = initRoutes