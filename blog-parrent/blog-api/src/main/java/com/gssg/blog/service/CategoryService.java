package com.gssg.blog.service;

import com.gssg.blog.vo.CategoryVo;

public interface CategoryService {
  CategoryVo findCategoryById(Long categoryId);
}
