const CodeEnum = require('./CodeEnum')

class ResponseResult {
  constructor(data = null, msg = null, other = null) {
    this.data = data;
    this.msg = msg;
    this.other = other;
  }

  /**
   * 创建基本的响应对象
   *
   * @method
   * @Description: 创建基本的响应对象
   * @return{Object<'data' | 'msg' | 'code' | 'other'>}
   * @author GSSG
   */
  createResult() {
    if (!this.code) {
      this.code = CodeEnum.SUCCESS.code;
    }
    const {code, msg, data} = this;
    let base = {code, msg, data};
    if (this.other) {
      base = {...base, ...this.other}
    }
    return base;
  }

  json(res) {
    res.json(this.createResult());
  }

  /**
   * 操作成功
   * @method
   * @Description: 操作成功
   * @param{Object} res - 结果
   * @param{String} [sign] - 成功表示 是CodeEnum中的属性
   * @author GSSG
   */
  success(res, sign) {
    const {code, msg} = CodeEnum[sign || 'SUCCESS'];
    this.code = code;
    this.msg = this.msg || msg;
    this.json(res);
  }

  /**
   * 操作失败
   * @method
   * @Description: 操作失败
   * @param{Object} res - 结果
   * @param{String} [sign] - 错误表示 是CodeEnum中的属性
   * @author GSSG
   */
  fail(res, sign) {
    const {code, msg} = CodeEnum[sign || 'FAIL'];
    this.code = code;
    this.msg = this.msg || msg;
    this.json(res);
  }
}

module.exports = ResponseResult;