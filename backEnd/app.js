// 导入.env 配置文件
require('dotenv').config({ path: '.env' });
const express = require('express');
const app = express();
const initDB = require('./src/init/initDB');
const initServer = require('./src/init/initServer');
const initRoutes = require('./src/init/initRoutes');
const cors = require('cors');
const morgan = require('morgan');

// 应用级别中间件
app.use(cors({ credentials: true, origin: true })); // 解决跨域 
app.use(express.json()); // 用于解析请求体数据
app.use(morgan('tiny')); // HTTP 请求日志
// 初始化路由
initRoutes(app)

const main = async () => {
  // 连接数据库
  await initDB();
  // 启动 node 代码
  await initServer(app);
}

main();