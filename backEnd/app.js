// 导入.env 配置文件
require('dotenv').config({ path: '.env' });
const express = require('express');
const app = express();
const initDB = require('./src/init/initDB');
const initServer = require('./src/init/initServer');
const initRoutes = require('./src/init/initRoutes');
const cors = require('cors');
const morgan = require('morgan');
const noMatchMiddleware = require('./src/middleware/404.middleware');
const errorMiddleware = require('./src/middleware/error.middleware');

// 应用级别中间件
app.use(cors({ credentials: true, origin: true })); // 解决跨域 
app.use(express.json()); // 用于解析请求体数据
app.use(morgan('tiny')); // HTTP 请求日志

// 初始化路由
initRoutes(app)

app.use(noMatchMiddleware); // 404 自定有中间件
app.use(errorMiddleware); // 统一错误处理 自定有中间件

const main = async () => {
  // 连接数据库
  await initDB();
  // 启动 node 代码
  await initServer(app);
}

main();