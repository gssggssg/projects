package com.gssg.blog.controller;

import com.gssg.blog.dao.pajo.SysUser;
import com.gssg.blog.utils.UserThreadLocal;
import com.gssg.blog.vo.Result;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("test")
public class TestController {

  @RequestMapping
  public Result test(){
    SysUser sysUser = UserThreadLocal.get();
    System.out.println(sysUser);
    return Result.success(null);
  }
}