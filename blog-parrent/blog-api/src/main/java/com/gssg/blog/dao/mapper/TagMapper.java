package com.gssg.blog.dao.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.gssg.blog.dao.pajo.Tag;

import java.util.List;

public interface TagMapper extends BaseMapper<Tag> {


    /**
     * 根据文章ID查询 标签列表
     * @param articleId
     * @return
     */
    List<Tag> findTagsByArticleId(Long articleId);
}
