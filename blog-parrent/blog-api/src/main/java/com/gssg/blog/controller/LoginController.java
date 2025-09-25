package com.gssg.blog.controller;

import com.gssg.blog.service.LoginService;
import com.gssg.blog.vo.Result;
import com.gssg.blog.vo.params.LoginParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("login")
public class LoginController{

  @Autowired
  private LoginService loginService;

  @PostMapping
  public Result login(@RequestBody LoginParams loginParams){
    // 登录 验证用户
    return loginService.login(loginParams);
  }
}
