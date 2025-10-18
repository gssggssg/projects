package com.gssg.blog.dao.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.gssg.blog.dao.dos.Archives;
import com.gssg.blog.dao.pajo.Article;

import java.util.List;

public interface ArticleMapper extends BaseMapper<Article> {

  List<Archives> listArchives();

  IPage<Archives> listArchive(Page<Article> page,
                              Long categoryId,
                              Long tagId,
                              String year,
                              String month);
}
