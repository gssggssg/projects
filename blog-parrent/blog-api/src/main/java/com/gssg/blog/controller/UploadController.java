package com.gssg.blog.controller;

import com.gssg.blog.utils.QiniuUtils;
import com.gssg.blog.vo.Result;
import com.qiniu.util.Auth;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@RestController
@RequestMapping("upload")
public class UploadController {

  @Autowired
  private QiniuUtils qiniuUtils;

  @PostMapping
  public Result upload(@RequestParam("image") MultipartFile file) throws Exception {
    // 原始文件名称 比如aa.png
    String originalFilename = file.getOriginalFilename();
    String fileName = UUID.randomUUID().toString() + "." + StringUtils.substringAfterLast(originalFilename, ".");
    // 上传文件 上传到哪呢？ 七牛云 云服务器 按量付费 速度快 把图片发放到离用户最近得服务器上
    // 降低 我们自身服务器得贷款消耗
    boolean upload = qiniuUtils.upload(file, fileName);
    if (upload) {
      return Result.success(qiniuUtils.getFileUrl(fileName));
    }
    return Result.fail(20001, "上传失败");
  }
}
