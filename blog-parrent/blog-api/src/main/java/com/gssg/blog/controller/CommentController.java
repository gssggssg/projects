package com.gssg.blog.controller;

import com.gssg.blog.service.CommentsService;
import com.gssg.blog.vo.Result;
import com.gssg.blog.vo.params.CommentParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("comments")
public class CommentController {

  @Autowired
  private CommentsService commentsService;

  @GetMapping("article/{id}")
  public Result commentArticle(@PathVariable("id") Long id) {
    return commentsService.commentByArticleId(id);
  }

  @PostMapping("create/change")
  public Result comment(@RequestBody CommentParam commentParam){
    return commentsService.comment(commentParam);
  }
}
