const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

// 用户个人信息

const User = sequelize.define('user', {
    userName: { // 用户名
        type: DataTypes.STRING, // 数据类型
        allowNull: false, // 是否允许为 null
        primaryKey: true, // 是否为主键
        unique: 'userName', // 是否可以重复
    },
    passWord: { // 密码
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: { // 邮箱
        type: DataTypes.STRING,
        allowNull: false,
    },
    avatar: { // 头像
        type: DataTypes.TEXT,
        allowNull: true,
    },
    bio: { // 简介
        type: DataTypes.TEXT,
        allowNull: true,
    },
});

module.exports = User;