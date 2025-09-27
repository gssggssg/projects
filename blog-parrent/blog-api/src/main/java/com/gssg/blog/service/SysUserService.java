package com.gssg.blog.service;

import com.gssg.blog.dao.pajo.SysUser;
import com.gssg.blog.vo.Result;

public interface SysUserService {

  SysUser findUserById(Long id);

  SysUser findUser(String account, String password);

  /**
   * 根据Token查询用户信息
   * @param token
   * @return Result
   */
  Result findUserByToken(String token);
}
