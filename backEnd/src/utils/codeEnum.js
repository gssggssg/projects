/**
 * 特殊的错误返回信息
 */
const CodeEnum = {
  SUCCESS: {
    code: 0,
    msg: 'success'
  },
  FAIL: {
    code: -1,
    msg: '操作失败'
  },
  ACCOUNT_REPEAT: {
    code: 4001,
    msg: '账号已经存在'
  },
  ACCOUNT_UNREGISTER: {
    code: 4002,
    msg: '账号不存在'
  },
  ACCOUNT_PWD_ERROR: {
    code: 4003,
    msg: '账号或者密码错误'
  },
  ACCOUNT_UN_LOGIN: {
    code: 4004,
    msg: '账号未登录'
  },

  ARTICLE_ADD_SUCCESS: {
    code: 0,
    msg: '文章新增成功'
  },
  
  ARTICLE_FAIL: {
    code: 0,
    msg: '文章新增失败'
  },
}

module.exports = CodeEnum
