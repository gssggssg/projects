package com.gssg.blog.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.gssg.blog.dao.mapper.CategoryMapper;
import com.gssg.blog.dao.pajo.Category;
import com.gssg.blog.service.CategoryService;
import com.gssg.blog.vo.CategoryVo;
import com.gssg.blog.vo.Result;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

  @Autowired
  private CategoryMapper categoryMapper;

  @Override
  public CategoryVo findCategoryById(Long categoryId) {
    Category category = categoryMapper.selectById(categoryId);
    CategoryVo categoryVo = new CategoryVo();
    BeanUtils.copyProperties(category, categoryVo);
    return categoryVo;
  }

  @Override
  public Result findAll() {
    List<Category> categories = categoryMapper.selectList(new LambdaQueryWrapper<>());
    return Result.success(copyList(categories));
  }

  private List<CategoryVo> copyList(List<Category> categoryList) {
    List<CategoryVo> categoryVoList = new ArrayList<>();
    for (Category category : categoryList) {
      categoryVoList.add(copy(category));
    }
    return categoryVoList;
  }

  private CategoryVo copy(Category category) {
    CategoryVo categoryVo = new CategoryVo();
    BeanUtils.copyProperties(category, categoryVo);
    return categoryVo;
  }
}
