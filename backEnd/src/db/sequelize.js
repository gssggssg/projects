const Sequelize = require('sequelize')

// 实例化 Sequelize

const sequelize = new Sequelize(
    process.env.DB_NAME, // 数据库名
    process.env.DB_USERNAME, // 用户名
    process.env.DB_PASSWORD, // 密码
    {
        dialect: process.env.DB_DIALECT, // 数据库类型
        host: process.env.DB_HOST, // 地址
        port: process.env.DB_PORT, // 端口
        logging: false, // 数据库操作日志
    }
)

module.exports = sequelize;
