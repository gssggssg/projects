package com.gssg.blog.service;

import com.gssg.blog.vo.Result;
import com.gssg.blog.vo.params.PageParams;

public interface ArticleService {

    /**
     * 分页查询文章列表
     *
     * @param pageParams
     * @return
     */
    Result listArticle(PageParams pageParams);
}
