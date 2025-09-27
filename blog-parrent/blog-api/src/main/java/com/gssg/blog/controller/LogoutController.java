package com.gssg.blog.controller;

import com.gssg.blog.service.LoginService;
import com.gssg.blog.vo.Result;
import com.gssg.blog.vo.params.LoginParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("logout")
public class LogoutController {

  @Autowired
  private LoginService loginService;

  @PostMapping
  public Result logout(@RequestHeader("Authorization") String token){
    // 登录 验证用户
    return loginService.logout(token);
  }
}
