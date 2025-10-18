package com.gssg.blog.controller;

import com.gssg.blog.service.CategoryService;
import com.gssg.blog.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("categorys")
public class CategoryController {
  @Autowired
  CategoryService categoryService;

  @GetMapping
  public Result categories() {
    return categoryService.findAll();
  }

  @GetMapping("detail")
  public Result categoriesDetail() {
    return categoryService.findAllDetail();
  }
}
