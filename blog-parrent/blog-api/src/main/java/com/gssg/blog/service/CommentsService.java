package com.gssg.blog.service;

import com.gssg.blog.vo.Result;
import com.gssg.blog.vo.params.CommentParam;

public interface CommentsService {

  /**
   * 根据文章id 查询所有的评论列表
   * @param id
   * @return
   */
  Result commentByArticleId(Long id);

  Result comment(CommentParam commentParam);
}
