const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

// 标签 module

const Tag = sequelize.define('tag', {
    name: { // 标签名
        type: DataTypes.STRING, // 数据类型
        allowNull: false, // 是否允许为 null
        primaryKey: true, // 是否为主键
    }
}, { timestamps: false }
);

module.exports = Tag;