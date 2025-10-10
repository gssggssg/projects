package com.gssg.blog.handler;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.gssg.blog.dao.pajo.SysUser;
import com.gssg.blog.service.LoginService;
import com.gssg.blog.utils.UserThreadLocal;
import com.gssg.blog.vo.ErrorCode;
import com.gssg.blog.vo.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
@Slf4j
public class LoginInterceptor implements HandlerInterceptor {

  @Autowired
  private LoginService loginService;

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    // 在执行controller方法(Handler)之前进行执行
    /**
     * 1. 需要判断 请求的接口路径 是否为 HandlerMethod(controller方法)
     * 2。判断 token 是否为空，如果为空 未登录
     * 3. 如果token不为空，登录验证loginService checkToken
     * 4. 如果验证成功 放行即可
     */
    if(!(handler instanceof HandlerMethod)){
      // handler 可能是 RequestResourceHandler springboot 程序访问静态资源 默认取classpath下的static目录取查询
      return true;
    }
    String token = request.getHeader("Authorization");

    log.info("=================request start===========================");
    String requestURI = request.getRequestURI();
    log.info("request uri:{}",requestURI);
    log.info("request method:{}",request.getMethod());
    log.info("token:{}", token);
    log.info("=================request end===========================");

    if(StringUtils.isBlank(token)){
      Result result = Result.fail(ErrorCode.NO_LOGIN.getCode(), "未登录");
      response.setContentType("application/json;charset=UTF-8");
      response.getWriter().print(JSON.toJSONString(result));
      return false;
    }

    SysUser sysUser = loginService.checkToken(token);
    if(sysUser == null){
      Result result = Result.fail(ErrorCode.NO_LOGIN.getCode(), "未登录");
      response.setContentType("application/json;charset=UTF-8");
      response.getWriter().print(JSON.toJSONString(result));
      return false;
    }
    // 登录验证成功，放行
    UserThreadLocal.put(sysUser);
    return true;
  }

  @Override
  public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
    // 如果不删除 ThreadLocal 中用完得信息，会有内存泄露得风险
    UserThreadLocal.remove();
  }
}
