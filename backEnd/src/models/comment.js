const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

// 评论 module

const Comment = sequelize.define('comment', {
    body: { // 评论内容
        type: DataTypes.TEXT, // 数据类型
    },
});

module.exports = Comment