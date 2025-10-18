package com.gssg.blog.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.gssg.blog.dao.dos.Archives;
import com.gssg.blog.dao.mapper.ArticleBodyMapper;
import com.gssg.blog.dao.mapper.ArticleMapper;
import com.gssg.blog.dao.mapper.ArticleTagMapper;
import com.gssg.blog.dao.pajo.Article;
import com.gssg.blog.dao.pajo.ArticleBody;
import com.gssg.blog.dao.pajo.ArticleTag;
import com.gssg.blog.dao.pajo.SysUser;
import com.gssg.blog.service.*;
import com.gssg.blog.utils.UserThreadLocal;
import com.gssg.blog.vo.*;
import com.gssg.blog.vo.params.ArticleParam;
import com.gssg.blog.vo.params.PageParams;
import org.joda.time.DateTime;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ArticleServiceImpl implements ArticleService {

  @Autowired
  private ArticleMapper articleMapper;

  @Autowired
  private TagService tagService;

  @Autowired
  private SysUserService sysUserService;

  @Autowired
  private ArticleBodyMapper articleBodyMapper;

  @Autowired
  private CategoryService categoryService;

  @Autowired
  private ThreadService threadService;

  @Autowired
  private ArticleTagMapper articleTagMapper;

  @Override
  public Result listArticle(PageParams pageParams) {
    /**
     * 分页查询 article 数据库表
     */
    Page<Article> page = new Page<>(pageParams.getPage(), pageParams.getPageSize());
    LambdaQueryWrapper<Article> queryWrapper = new LambdaQueryWrapper<>();
    if(pageParams.getCategoryId() != null){
      // and category_id=#{categoryId}
      queryWrapper.eq(Article::getCategoryId, pageParams.getCategoryId());
    }
    List<Long> articleIdList = new ArrayList<>();
    if(pageParams.getTagId() != null){
      // 加入标签 条件查询
      // article表中 并没有tag字段 一篇文章 有多个标签
      // article_tag article_id 1 : n tag_id
      LambdaQueryWrapper<ArticleTag> articleTagQueryWrapper = new LambdaQueryWrapper<>();
      articleTagQueryWrapper.eq(ArticleTag::getTagId, pageParams.getTagId());
      List<ArticleTag> articleTags = articleTagMapper.selectList(articleTagQueryWrapper);
      for(ArticleTag articleTag : articleTags){
        articleIdList.add(articleTag.getArticleId());
      }
      if(!articleIdList.isEmpty()){
        // and id in(1,2,3)
        queryWrapper.in(Article::getId,articleIdList);
      }
    }
    // 是否置顶进行排序
    // order by create_date desc
    queryWrapper.orderByDesc(Article::getWeight, Article::getCategoryId);
    Page<Article> articlePage = articleMapper.selectPage(page, queryWrapper);
    List<Article> records = articlePage.getRecords();
    // 能直接返回list吗？很明显不能
    List<ArticleVo> articleVoList = copyList(records, true, true);
    return Result.success(articleVoList);
  }

  /**
   * 最热文章
   *
   * @param limit
   * @return
   */
  @Override
  public Result hotArticle(int limit) {
    LambdaQueryWrapper<Article> queryWrapper = new LambdaQueryWrapper<>();
    queryWrapper.orderByDesc(Article::getViewCounts);
    queryWrapper.select(Article::getId, Article::getTitle);
    queryWrapper.last("limit " + limit);
    // SELECT id,title FROM ms_article ORDER BY view_counts DESC LIMIT 5
    List<Article> article = articleMapper.selectList(queryWrapper);
    return Result.success(copyList(article, false, false));
  }

  /**
   * 最新文章
   *
   * @param limit
   * @return
   */
  @Override
  public Result newArticle(int limit) {
    LambdaQueryWrapper<Article> queryWrapper = new LambdaQueryWrapper<>();
    queryWrapper.orderByDesc(Article::getCreateDate);
    queryWrapper.select(Article::getId, Article::getTitle);
    queryWrapper.last("limit " + limit);
    // SELECT id,title FROM ms_article ORDER BY create_date DESC LIMIT 5
    List<Article> article = articleMapper.selectList(queryWrapper);
    return Result.success(copyList(article, false, false));
  }

  @Override
  public Result listArchives() {
    List<Archives> archivesList = articleMapper.listArchives();
    return Result.success(archivesList);
  }

  @Override
  public Result findArticleById(Long articleId) {
    /**
     * 1. 根据ID查询 文章信息
     * 2. 根据bodyId和categoryId去做关联查询
     */
    Article article = articleMapper.selectById(articleId);
    ArticleVo copy = copy(article, true, true, true, true);

    // 查看完文章了，新增阅读数，有没有问题呢？
    // 查看完文章之后，本应该直接返回数据了，这时候做了一个更新操作，更新时加写所，阻塞其他的都读操作，性能就会比较低
    // 更新 增加了此次接口的 耗时 如果一旦更新出现问题，不能影响 查看文章的操作
    // 线程池 可以把更新操作 扔到线程池中取执行，和主线程就不相关了
    threadService.updateArticleViewCount(articleMapper, article);
    return Result.success(copy);
  }

  @Override
  public Result publish(ArticleParam articleParam) {
    // 此接口 要加入到登录拦截中
    SysUser sysUser = UserThreadLocal.get();
    /**
     * 1. 发布文章 目的 构建Article对象
     * 2. 作者id 当前登录用户
     * 3. 标签  要将标签加入到关联列表当中
     * 4. body 内容存储 article bodyid
     */
    Article article = new Article();
    article.setAuthorId(sysUser.getId());
    article.setWeight(Article.Article_Common);
    article.setViewCounts(0);
    article.setTitle(articleParam.getTitle());
    article.setSummary(articleParam.getSummary());
    article.setCommentCounts(0);
    article.setCategoryId(articleParam.getCategory().getId());
    // 插入之后 会生成一个文章id
    articleMapper.insert(article);
    // tag
    List<TagVo> tags = articleParam.getTags();
    if(tags != null){
      Long articleId = article.getId();
      for (TagVo tag : tags) {
        ArticleTag articleTag = new ArticleTag();
        articleTag.setTagId(tag.getId());
        articleTag.setArticleId(articleId);
        articleTagMapper.insert(articleTag);
      }
    }
    // body
    ArticleBody articleBody = new ArticleBody();
    articleBody.setArticleId(article.getId());
    articleBody.setContent(articleParam.getBody().getContent());
    articleBody.setContentHtml(articleParam.getBody().getContentHtml());
    articleBodyMapper.insert(articleBody);
    article.setBodyId(articleBody.getId());
    Map<String, String> map = new HashMap<>();
    map.put("id",article.getId().toString());
    return Result.success(map);
  }

  private List<ArticleVo> copyList(List<Article> records, boolean isTag, boolean isAuthor) {
    List<ArticleVo> articleVoList = new ArrayList<>();
    for (Article article : records) {
      articleVoList.add(copy(article, isTag, isAuthor, false, false));
    }
    return articleVoList;
  }

  private List<ArticleVo> copyList(List<Article> records, boolean isTag, boolean isAuthor, boolean isBody, boolean isCategory) {
    List<ArticleVo> articleVoList = new ArrayList<>();
    for (Article article : records) {
      articleVoList.add(copy(article, isTag, isAuthor, isBody, isCategory));
    }
    return articleVoList;
  }

  private ArticleVo copy(Article article, boolean isTag, boolean isAuthor, boolean isBody, boolean isCategory) {
    ArticleVo articleVo = new ArticleVo();
    BeanUtils.copyProperties(article, articleVo);
    if (isTag) {
      Long articleId = article.getId();
      articleVo.setTags(tagService.findTagsByArticleId(articleId));
    }
    if (isAuthor) {
      Long authorId = article.getAuthorId();
      articleVo.setAuthor(sysUserService.findUserById(authorId).getNickname());
    }
    if (isBody) {
      Long bodyId = article.getBodyId();
      articleVo.setBody(findArticleBodyById(bodyId));
    }
    if (isCategory) {
      Long categoryId = article.getCategoryId();
      articleVo.setCategory(findCategory(categoryId));
    }
    articleVo.setCreateDate(new DateTime(article.getCreateDate()).toString("yyyy-MM-dd HH:mm:ss"));
    return articleVo;
  }

  private CategoryVo findCategory(Long categoryId) {
    return categoryService.findCategoryById(categoryId);
  }


  private ArticleBodyVo findArticleBodyById(Long bodyId) {
    ArticleBody articleBody = articleBodyMapper.selectById(bodyId);
    ArticleBodyVo articleBodyVo = new ArticleBodyVo();
    articleBodyVo.setContent(articleBody.getContent());
    return articleBodyVo;
  }
}
