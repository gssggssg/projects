package com.gssg.blog.service;

import com.gssg.blog.vo.Result;
import com.gssg.blog.vo.params.LoginParams;

public interface LoginService {

  /**
   * 登录功能
   * @param loginParams
   * @return
   */
  Result login(LoginParams loginParams);
}
