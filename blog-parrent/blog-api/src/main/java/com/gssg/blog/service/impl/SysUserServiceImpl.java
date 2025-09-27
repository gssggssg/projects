package com.gssg.blog.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.gssg.blog.dao.mapper.SysUserMapper;
import com.gssg.blog.dao.pajo.SysUser;
import com.gssg.blog.service.LoginService;
import com.gssg.blog.service.SysUserService;
import com.gssg.blog.vo.ErrorCode;
import com.gssg.blog.vo.LoginUserVo;
import com.gssg.blog.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SysUserServiceImpl implements SysUserService {

  @Autowired
  private SysUserMapper sysUserMapper;

  @Autowired
  private LoginService loginService;

  @Override
  public SysUser findUserById(Long id) {
    SysUser sysUser = sysUserMapper.selectById(id);
    if (sysUser == null) {
      sysUser = new SysUser();
      sysUser.setNickname("佚名");
    }
    return sysUser;
  }

  @Override
  public SysUser findUser(String account, String password) {
    LambdaQueryWrapper<SysUser> queryWrapper = new LambdaQueryWrapper<>();
    queryWrapper.eq(SysUser::getAccount, account);
    queryWrapper.eq(SysUser::getPassword, password);
    queryWrapper.select(SysUser::getAccount, SysUser::getId, SysUser::getAvatar, SysUser::getNickname);
    queryWrapper.last("limit 1");
    return sysUserMapper.selectOne(queryWrapper);
  }

  @Override
  public Result findUserByToken(String token) {
    /**
     * 1. token合法性校验
     *  - 是否为空
     *  - 解析是否为空
     *  - redis是否存在
     * 2. 如果校验失败返回错误
     * 3. 如果校验成功，返回对应的结果 LoginUserVo
     */
    SysUser sysUser = loginService.checkToken(token);
    if(sysUser == null){
      return Result.fail(ErrorCode.TOKEN_ERROR.getCode(), ErrorCode.TOKEN_ERROR.getMsg());
    }
    LoginUserVo loginUserVo = new LoginUserVo();
    loginUserVo.setId(sysUser.getId());
    loginUserVo.setAccount(sysUser.getAccount());
    loginUserVo.setNickname(sysUser.getNickname());
    loginUserVo.setAvatar(sysUser.getAvatar());
    return Result.success(loginUserVo);
  }

  @Override
  public SysUser findUserByAccount(String account) {
    LambdaQueryWrapper<SysUser> queryWrapper = new LambdaQueryWrapper<>();
    queryWrapper.eq(SysUser::getAccount, account);
    queryWrapper.last("limit 1");
    return sysUserMapper.selectOne(queryWrapper);
  }

  @Override
  public void save(SysUser sysUser) {
    // 保存用户 id会自动生成
    // 这个地方 默认生成的id是 分布式id 雪花算法
    // mybatis-plus
    sysUserMapper.insert(sysUser);
  }
}
