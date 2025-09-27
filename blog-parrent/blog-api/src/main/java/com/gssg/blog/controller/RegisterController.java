package com.gssg.blog.controller;

import com.gssg.blog.service.LoginService;
import com.gssg.blog.vo.Result;
import com.gssg.blog.vo.params.LoginParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("register")
public class RegisterController {

  @Autowired
  private LoginService loginService;

  @PostMapping
  public Result register(@RequestBody LoginParams loginParams) {
    // sso单点登录，后期如果把登录注册功能 提出去（单独的服务，可以独立提供接口服务）
    return loginService.register(loginParams);
  }
}
