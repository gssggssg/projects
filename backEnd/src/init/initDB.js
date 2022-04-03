const dbConnection = require('../db/connection');
// 引入models
const User = require('../models/user'); // 用户
const Article = require('../models/article'); // 文章
const Comment = require('../models/comment'); // 评论
const Tag = require('../models/tag'); // 标签

const sequelize = require('../db/sequelize'); // 标签

// 初始化数据库


// 初始化关系
/**
 * A.hasOne(B); // A 有一个 B
 * A.belongsTo(B); // A 属于 B
 * A.hasMany(B); // A 有多个 B
 * A.belongsToMany(B, { through: 'C' }); // A 属于多个 B , 通过联结表 C
 */
const initRelation = () => {
    // 用户和文章关系：一对多
    User.hasMany(Article, {
        onDelete: "CASCADE", // 删除用户的时候会删除用户的的文章
    })
    Article.hasMany(User, {
        constraints: false,
    })

    // 用户和评论
    User.hasMany(Comment, {
        onDelete: "CASCADE", // 删除用户的时候会删除用户的的文章
    })
    Comment.hasMany(User, {
        constraints: false,
    })

    // // 用戶 - 文章（收藏文章） 多对多关系
    User.belongsToMany(Article, {
        through: "Collect",
        timestamps: false, // 时间戳
    })
    Article.belongsToMany(User, {
        through: "Collect",
        timestamps: false, // 时间戳
        constraints: false,
    })

    // // 自关联：用户 - 用户 （关注），多对多关系
    User.belongsToMany(User, {
        through: "Followers",
        as: "followers",
        timestamps: false, // 时间戳
    })

    // // 文章和标签
    Article.belongsToMany(Tag, {
        through: "TagList",
        uniqueKey: false, // 唯一标识符
        timestamps: false, // 时间戳
    })
    Tag.belongsToMany(Article, {
        through: "TagList",
        uniqueKey: false,
        timestamps: false,
        constraints: false,
    })

}

const initDb = () => {
    return new Promise(async (resolve, reject) => {
        try {
            // 数据库连接
            await dbConnection()
            // 初始化 models 关系
            initRelation()
            // 同步 modul 至数据库
            await sequelize.sync({ alter: true });
            resolve()
        } catch (error) {
            console.log(error)
            reject()
        }
    })
}

module.exports = initDb;
