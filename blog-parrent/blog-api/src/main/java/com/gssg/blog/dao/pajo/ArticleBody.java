package com.gssg.blog.dao.pajo;

import lombok.Data;

@Data
public class ArticleBody {

  private Long id;
  private String content;
  private String contentHtml;
  private Long articleId;
}