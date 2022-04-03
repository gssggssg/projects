## 后端
node express

文件目录

```bash
[backEnd] # 后端文件结构
|- [src] # 辅助脚本
|     |- [controller] # 控制器
|     |- [db] # 数据库
|     |- [exceptions] # 异常类
|     |- [init] # 初始化
|     |     |- [initDB] # 初始化数据库操作
|     |     |- [initRoutes] # 初始化路由
|     |     |- [initServer] # 初始化服务端
|     |- [middleware] # 中间件
|     |- [models] # models
|     |- [routes] # 路由
|- [.env] # 配置文件
|- .gitignore # git提交隐藏文件
|- app # 入口主文件
|- [node_modules]
|- package.json
|- README.md
`...
```