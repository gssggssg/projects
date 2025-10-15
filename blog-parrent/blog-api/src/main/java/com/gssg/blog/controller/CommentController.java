package com.gssg.blog.controller;

import com.gssg.blog.service.CommentService;
import com.gssg.blog.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("comments")
public class CommentController {

  @Autowired
  private CommentService commentService;

  @GetMapping("article/{id}")
  public Result commentArticle(@PathVariable("id") Long id) {
    return commentService.commentByArticleId(id);
  }
}
