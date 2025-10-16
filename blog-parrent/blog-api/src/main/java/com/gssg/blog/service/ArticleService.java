package com.gssg.blog.service;

import com.gssg.blog.vo.Result;
import com.gssg.blog.vo.params.ArticleParam;
import com.gssg.blog.vo.params.PageParams;

public interface ArticleService {

  /**
   * 分页查询文章列表
   *
   * @param pageParams
   * @return
   */
  Result listArticle(PageParams pageParams);

  /**
   * 最热文章
   * @param limit
   * @return
   */
  Result hotArticle(int limit);

  /**
   * 最新文章
   * @param limit
   * @return
   */
  Result newArticle(int limit);

  /**
   * 文章归档
   * @return
   */
  Result listArchives();

  /**
   * 查询文章
   * @return
   */
  Result findArticleById(Long articleId);

  /**
   * 文章发布服务
   * @param articleParam
   * @return
   */
  Result publish(ArticleParam articleParam);
}
