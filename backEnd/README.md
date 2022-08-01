# 后端

这是个人网站的后端项目

使用 __Node.js__、__express__、__Sequelize__

* 使用`jwt`进行`token`加密解密
* 使用`jwt`进行账号的加密解密

## 运行项目

使用包管理器 `npm` 或 `yarn` 等都可以。
> __注__ : 运行项目需要先配置 `.env` 文件进行项目的基本配置

```bash
# 安装依赖包
npm install

# 启动项目
npm run dev
```

## 配置项

出于安全考虑。本人没有在仓库中没有上传 `.env` 配置文件,需要自己配置一个 `.env` 文件，进行项目配置。

```bash
# .env 文件

# server 配置
HOST = localhost
PORT = 端口号（8080）

# mysql 配置
DB_NAME = 数据库名
DB_USERNAME = 数据库账号
DB_PASSWORD = 数据库密码
DB_HOST = 数据库地址
DB_PORT = 数据库端口号
DB_DIALECT = 数据库类型（mysql）

# encrypt 配置
CONFUSE = 加密值

# jwt 配置
JWT_SECRET = jwt的常量

```

## 文件目录

```bash
[backEnd] # 后端文件结构
|- [src] # 辅助脚本
|     |- [controller] # 控制器
|     |- [db] # 数据库
|     |- [exceptions] # 异常类
|     |- [init] # 初始化
|     |     |- initDB # 初始化数据库操作
|     |     |- initRoutes # 初始化路由
|     |     |- initServer # 初始化服务端
|     |- [middleware] # 中间件
|     |- [models] # models
|     |- [routes] # 路由
|     |- [utils] # 工具
|     |     |- [validata] # 数据验证
|     |     |- encrypt # 加密与解密
|     |     |- jsonwebtoken # token 处理
|- .env # 配置文件
|- .gitignore # git提交隐藏文件
|- app # 入口主文件
|- [node_modules]
|- package.json
|- README.md
`...
```
