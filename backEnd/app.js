// 导入.env 配置文件
require('dotenv').config({ path: '.env' })

const initDB = require('./src/init/initDB')
const initServer = require('./src/init/initServer')

const main = async () => {
  // 连接数据库
  await initDB();
  // 启动 node 代码
  await initServer();
}

main();