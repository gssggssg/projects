package com.gssg.blog.dao.pajo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class SysUser {

    // @TableId(type = IdType.ASSIGN_ID)
    // 以后用户多了之后，要进行分表操作，id就需要分布式id了
    // @TableId(type=IdType.AUTO) // 数据库自增
    private Long id;

    private String account;

    private Integer admin;

    private String avatar;

    private Long createDate;

    private Integer deleted;

    private String email;

    private Long lastLogin;

    private String mobilePhoneNumber;

    private String nickname;

    private String password;

    private String salt;

    private String status;
}
