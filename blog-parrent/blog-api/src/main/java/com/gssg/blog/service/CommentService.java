package com.gssg.blog.service;

import com.gssg.blog.vo.Result;

public interface CommentService {

  /**
   * 根据文章id 查询所有的评论列表
   * @param id
   * @return
   */
  Result commentByArticleId(Long id);
}
