const sequelize = require('./sequelize')

// 连接数据库操作

const dbConnection = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            await sequelize.authenticate(); // 测试数据库是否连接成功
            console.log('成功连接到数据库');
            resolve()
        } catch (error) {
            console.error('连接数据库失败:', error);
            reject(error)
        }
    })
}
module.exports = dbConnection;
