const {DataTypes} = require('sequelize')
const sequelize = require('../db/sequelize')

// 文章 module

const Article = sequelize.define('article',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false, // 是否允许为 null
      primaryKey: true,
      autoIncrement: true
    },
    slug: { // 文章别名(唯一ID)
      type: DataTypes.STRING, // 数据类型
      // allowNull: false, // 是否允许为 null
      // primaryKey: true, // 是否为主键
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
    parent_id: { // 内容主题
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // timestamp: { //我们自己定义的时间戳字段
    //   type: DataTypes.DATE,
    //   defaultValue: Date.now()
    // }
  },
  {
    createdAt: "createTime", // 将createdAt设为自定义字段createdTime
    updatedAt: "updatedTime", // 将createdAt设为自定义字段createdTime
  }
);

module.exports = Article