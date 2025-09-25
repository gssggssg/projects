package com.gssg.blog.service.impl;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.gssg.blog.dao.pajo.SysUser;
import com.gssg.blog.service.LoginService;
import com.gssg.blog.service.SysUserService;
import com.gssg.blog.utils.JWTUtils;
import com.gssg.blog.vo.ErrorCode;
import com.gssg.blog.vo.Result;
import com.gssg.blog.vo.params.LoginParams;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
public class LoginServiceImpl implements LoginService {

  @Autowired
  private SysUserService sysUserService;

  @Autowired
  private RedisTemplate<String, String> redisTemplate;

  private static final String slat = "gssg!@#";

  @Override
  public Result login(LoginParams loginParams) {
    /**
     * 1. 检查参数是否合法
     * 2. 根据用户名和密码取user表中查询 是否存在
     * 3. 如果不存在 登录失败
     * 4。如果存在，使用jwt 生成token 返回给前端
     * 5. token放入redis中，redis toke：user信息 设置过期时间
     * （登录认证的时候 先认证token字符串是否合法，去redis认证是否存在）
     */
    String account = loginParams.getAccount();
    String password = loginParams.getPassword();
    if (StringUtils.isBlank(account) || StringUtils.isBlank(password)) {
      return Result.fail(ErrorCode.PARAMS_ERROR.getCode(), ErrorCode.PARAMS_ERROR.getMsg());
    }

    password = DigestUtils.md5Hex(password + slat);

    SysUser sysUser = sysUserService.findUser(account, password);
    if (sysUser == null) {
      return Result.fail(ErrorCode.ACCOUNT_PWD_NOT_EXIST.getCode(), ErrorCode.ACCOUNT_PWD_NOT_EXIST.getMsg());
    }
    String token = JWTUtils.createToken(sysUser.getId());

    redisTemplate.opsForValue().set("TOKEN" + token, JSON.toJSONString(sysUser), 1, TimeUnit.DAYS);
    return Result.success(token);
  }
}
