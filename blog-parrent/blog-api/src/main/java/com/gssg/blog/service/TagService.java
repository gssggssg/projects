package com.gssg.blog.service;

import com.gssg.blog.vo.Result;
import com.gssg.blog.vo.TagVo;
import com.gssg.blog.vo.params.PageParams;

import java.util.List;

public interface TagService {


  List<TagVo> findTagsByArticleId(Long articleId);

  Result hots(int limit);
}
