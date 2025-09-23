package com.gssg.blog.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.gssg.blog.dao.mapper.ArticleMapper;
import com.gssg.blog.dao.pajo.Article;
import com.gssg.blog.service.ArticleService;
import com.gssg.blog.service.TagService;
import com.gssg.blog.service.SysUserService;
import com.gssg.blog.vo.ArticleVo;
import com.gssg.blog.vo.Result;
import com.gssg.blog.vo.params.PageParams;
import org.joda.time.DateTime;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    private ArticleMapper articleMapper;

    @Autowired
    private TagService tagService;

    @Autowired
    private SysUserService sysUserService;

    @Override
    public Result listArticle(PageParams pageParams) {
        /**
         * 分页查询 article 数据库表
         */
        Page<Article> page = new Page<>(pageParams.getPage(), pageParams.getPageSize());
        LambdaQueryWrapper<Article> queryWrapper = new LambdaQueryWrapper<>();
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

    private List<ArticleVo> copyList(List<Article> records, boolean isTag, boolean isAuthor) {
        List<ArticleVo> articleVoList = new ArrayList<>();
        for (Article article : records) {
            articleVoList.add(copy(article, isTag, isAuthor));
        }
        return articleVoList;
    }

    private ArticleVo copy(Article article, boolean isTag, boolean isAuthor) {
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
        articleVo.setCreateDate(new DateTime(article.getCreateDate()).toString("yyyy-MM-dd HH:mm:ss"));
        return articleVo;
    }
}
