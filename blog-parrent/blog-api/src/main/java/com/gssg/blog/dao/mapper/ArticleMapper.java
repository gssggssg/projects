package com.gssg.blog.dao.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.gssg.blog.dao.dos.Archives;
import com.gssg.blog.dao.pajo.Article;

import java.util.List;

public interface ArticleMapper extends BaseMapper<Article> {

  List<Archives> listArchives();
}
