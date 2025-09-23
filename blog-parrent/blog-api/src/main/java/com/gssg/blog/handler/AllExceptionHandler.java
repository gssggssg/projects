package com.gssg.blog.handler;

import com.gssg.blog.vo.Result;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

// 对加了@Controller 注解的方法进行拦截处理 AOP实现
@ControllerAdvice
public class AllExceptionHandler {

  // 进行异常处理，处理Exception.class的异常
  @ExceptionHandler(Exception.class)
  @ResponseBody // 返回JSON数据
  public Result handleException(Exception ex) {
    ex.printStackTrace();
    return Result.fail(-999, "系统异常");
  }
}
