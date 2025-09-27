package com.gssg.blog.service;

import com.gssg.blog.dao.pajo.SysUser;
import com.gssg.blog.vo.Result;
import com.gssg.blog.vo.params.LoginParams;

public interface LoginService {

  /**
   * 登录功能
   * @param loginParams
   * @return Result
   */
  Result login(LoginParams loginParams);

  SysUser checkToken(String token);

  /**
   * 退出登录
   * @param token
   * @return Result
   */
  Result logout(String token);

  /**
   * 注册
   * @param loginParams
   * @return
   */
  Result register(LoginParams loginParams);
}
