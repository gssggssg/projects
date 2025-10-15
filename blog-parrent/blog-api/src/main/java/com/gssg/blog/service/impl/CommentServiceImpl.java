package com.gssg.blog.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.gssg.blog.dao.mapper.CommentMapper;
import com.gssg.blog.dao.pajo.Comment;
import com.gssg.blog.service.CommentService;
import com.gssg.blog.service.SysUserService;
import com.gssg.blog.vo.CommentVo;
import com.gssg.blog.vo.Result;
import com.gssg.blog.vo.UserVo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

  @Autowired
  private CommentMapper commentMapper;

  @Autowired
  private SysUserService sysUserService;


  @Override
  public Result commentByArticleId(Long id) {
    /**
     * 1. 根据文章id 查询评论列表 从comment 表中查询
     * 2. 根据作者的id 查询作者的信息
     * 3. 判断 如果 level = 1 要去查询他有没有子评论
     * 4. 如果有 根据评论id 进程查询（parent_id）
     */

    LambdaQueryWrapper<Comment> queryWrapper = new LambdaQueryWrapper<Comment>();
    queryWrapper.eq(Comment::getArticleId, id);
    queryWrapper.eq(Comment::getLevel, 1);
    List<Comment> comments = commentMapper.selectList(queryWrapper);
    List<CommentVo> commentVoList = copyList(comments);
    return Result.success(commentVoList);
  }

  private List<CommentVo> copyList(List<Comment> comments) {
    List<CommentVo> commentVoList = new ArrayList<>();
    for (Comment comment : comments) {
      commentVoList.add(copy(comment));
    }
    return commentVoList;
  }

  private CommentVo copy(Comment comment) {
    CommentVo commentVo = new CommentVo();
    BeanUtils.copyProperties(comment, commentVo);
    // 作者信息
    Long articleId = comment.getArticleId();
    UserVo userVo = sysUserService.findUserVoById(articleId);
    commentVo.setAuthor(userVo);
    // 子评论
    Integer level = comment.getLevel();
    if (1 == level) {
      Long id = comment.getId();
      List<CommentVo> commentVoList = findCommentByParentId(id);
      commentVo.setChildrens(commentVoList);
    }
    // to User 给谁评论
    if (level > 1) {
      Long toUid = comment.getToUid();
      UserVo toUserVo = sysUserService.findUserVoById(toUid);
      commentVo.setToUser(toUserVo);
    }
    return commentVo;
  }

  private List<CommentVo> findCommentByParentId(Long id) {
    LambdaQueryWrapper<Comment> queryWrapper = new LambdaQueryWrapper<>();
    queryWrapper.eq(Comment::getParentId, id);
    queryWrapper.eq(Comment::getLevel, 2);
    return copyList(commentMapper.selectList(queryWrapper));
  }
}
