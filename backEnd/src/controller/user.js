const { getUserValidata, loginUserValidata, addUserValidata } = require('../utils/validata/user.validata');
const HttpEexceptions = require('../exceptions/http.exception');
const User = require('../models/user');
const { md5Password, verifyPassword } = require('../utils/encrypt');
const { sign, verifyToken } = require('../utils/jsonwebtoken');
/**
 * 用户信息操作控制器
 */

// 添加用户
module.exports.addUser = async (req, re, next) => {
    try {
        const { userName, passWord, email } = req.body?.user; // 获取传过来数据
        const { through, error } = addUserValidata(req.body?.user); // 验证数据格式是否正确
        if (!through) throw new HttpEexceptions(401, '数据错误', error)
        const exists = await User.findByPk(userName); // 验证用户是否存在
        if (exists) throw new HttpEexceptions(401, '用户名已存在', '请更换一个用户名')
        const md5PWD = await md5Password(passWord)
        const newUser = await User.create({ userName, passWord: md5PWD, email })
        // console.log('newUser', newUser, !through, !!exists)
        if (newUser) {
            // 创建 token
            // console.log('niha')
            // let data = {};
            // data.userName = userName;
            // data.email = email;
            // // data.token = await sign(req.body?.user);
            // data.bio = null;
            // data.avatar = null;
            console.log(newUser)
            res.status(200).json({
                massage: "创建用户成功！！！",
                data: newUser.data,
            })
            // res.json({
            //     status: 200,
            //     massage: "success",
            //     data: newUser.data
            // })
        }
    } catch (error) {
        next(error)
    }
}

// 用户登录
module.exports.loginUser = async (req, res) => {
    const { userName, passWord } = req.body && req.body?.user; // 获取传过来数据
    // 验证请求数据
    const { through, error } = loginUserValidata({ userName, passWord })

    // const user = await User.findOne({ where: { userName:`${userName}` } })
    const user = await User.findAll()
    // if (!user) throw new HttpEexceptions(401,)
    console.log(userName, passWord, through, error, user)
}

// 获取用户
module.exports.getUser = async (req, res) => {
    res.json({
        status: 200,
        massage: "success",
        data: {
            code: 1,
            massage: "获取用户成功！！！",
            data: {}
        }
    })
}