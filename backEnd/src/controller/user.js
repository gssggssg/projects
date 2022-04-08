const { getUserValidata, loginUserValidata, addUserValidata } = require('../utils/validata/user.validata');
const HttpEexceptions = require('../exceptions/http.exception');
const User = require('../models/user');
const { md5Password, verifyPassword } = require('../utils/encrypt');
const { sign, verifyToken } = require('../utils/jsonwebtoken');
/**
 * 用户信息操作控制器
 */

// 添加用户
module.exports.addUser = async (req, res, next) => {
    try {
        const { through, error } = addUserValidata(req.body?.user); // 验证数据格式是否正确
        if (!through) throw new HttpEexceptions(401, '数据错误', error)
        const { userName, passWord, email } = req.body?.user; // 获取传过来数据
        const exists = await User.findByPk(userName); // 验证用户是否存在
        if (exists) throw new HttpEexceptions(401, '用户名已存在', '请更换一个用户名')
        const md5PWD = await md5Password(passWord)
        const newUser = await User.create({ userName, passWord: md5PWD, email })
        if (newUser) {
            const ReturnData = {
                userName: newUser.dataValues.userName,
                email: newUser.dataValues.email,
                token: await sign({ userName, email }),
                bio: null,
                avatar: null,
            }
            res.status(200).json({
                status: 200,
                massage: "success",
                data: {
                    code: 1,
                    massage: "创建用户成功！",
                    data: ReturnData
                }
            })
        }
    } catch (error) { next(error) } // 整体异常捕获
}

// 用户登录
module.exports.loginUser = async (req, res, next) => {
    try {
        const { through, error } = loginUserValidata(req.body?.user); // 验证数据格式是否正确
        if (!through) throw new HttpEexceptions(401, '数据错误', error)
        const { userName, passWord } = req.body?.user; // 获取传过来数据
        const user = await User.findByPk(userName); // 验证用户是否存在
        if (!user) throw new HttpEexceptions(401, '用户名不存在！', '请更换用户名重新输入！')
        const md5PWD = await verifyPassword(user.dataValues.passWord, passWord) //判断密码是否正确
        if (!md5PWD) throw new HttpEexceptions(401, '密码不正确！', '请更换密码重新输入！')
        delete user.dataValues.passWord
        user.dataValues.token = await sign({
            userName: user.dataValues.userName,
            email: user.dataValues.email
        })
        res.status(200).json({
            status: 200,
            massage: "success",
            data: {
                code: 1,
                massage: "登录成功",
                data: user
            }
        })
    } catch (error) { next(error) } // 整体异常捕获
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