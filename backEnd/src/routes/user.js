const express = require('express');
// 模块化
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        status: 200,
        massage: "success",
        data: {
            code: 1,
            massage: "请求数据成功！！！",
            data: {}
        }
    })
});

router.post('/', (req, res) => {
    res.json({
        status: 200,
        massage: "success",
        data: {
            code: 1,
            massage: "请求数据成功！！！",
            data: {}
        }
    })
});

module.exports = router;