package com.gssg.blog.service;

import com.gssg.blog.vo.Result;
import com.gssg.blog.vo.TagVo;
import java.util.List;

public interface TagService {

  List<TagVo> findTagsByArticleId(Long articleId);

  Result hots(int limit);

  Result findAll();

  Result findAllDetail();

  Result findDetailById(Long id);
}
