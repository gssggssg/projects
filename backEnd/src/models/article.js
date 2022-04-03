const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

// 文章 module

const Article = sequelize.define('article', {
    slug: { // 文章别名(唯一ID)
        type: DataTypes.STRING, // 数据类型
        allowNull: false, // 是否允许为 null
        primaryKey: true, // 是否为主键
    },
    title: { // 文章标题
        type: DataTypes.STRING,
        allowNull: true,
    },
    describe: { // 描述
        type: DataTypes.TEXT,
    },
    body: { // 内容主题
        type: DataTypes.TEXT,
        allowNull: true,
    },
});

module.exports = Article