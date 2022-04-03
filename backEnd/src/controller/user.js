/**
 * 用户信息操作控制器
 */

// 添加用户
module.exports.addUser = async (req, res) => {
    res.json({
        status: 200,
        massage: "success",
        data: {
            code: 1,
            massage: "添加用户成功！！！",
            data: {}
        }
    })
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