package com.gssg.blog.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.gssg.blog.dao.mapper.SysUserMapper;
import com.gssg.blog.dao.pajo.SysUser;
import com.gssg.blog.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SysUserServiceImpl implements SysUserService {

  @Autowired
  private SysUserMapper sysUserMapper;

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
}
