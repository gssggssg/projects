package com.gssg.blog.service;

import com.gssg.blog.vo.CategoryVo;
import com.gssg.blog.vo.Result;

public interface CategoryService {
  CategoryVo findCategoryById(Long categoryId);

  Result findAll();
}
