package com.gssg.blog.service;

import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.gssg.blog.dao.mapper.ArticleMapper;
import com.gssg.blog.dao.pajo.Article;
import lombok.Data;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Data
@Service
public class ThreadService {

  // 期望此操作在线程池 执行 不会影响原有的主线程
  @Async("taskExecutor")
  public void updateArticleViewCount(ArticleMapper articleMapper, Article article) {
    int viewCounts = article.getViewCounts();
    Article articleUpdate = new Article();
    articleUpdate.setViewCounts(viewCounts + 1);
    LambdaUpdateWrapper<Article> updateWrapper = new LambdaUpdateWrapper<>();

    updateWrapper.eq(Article::getId, article.getId());
    // 设置一个 为了在多线程的环境下 线程安全
    updateWrapper.eq(Article::getViewCounts, viewCounts);
    // update article set view_count = 100 where view_count = 99 and id = 11
    articleMapper.update(articleUpdate, updateWrapper);
  }
}
