package com.gssg.blog.dao.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.gssg.blog.dao.pajo.Tag;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TagMapper extends BaseMapper<Tag> {

  /**
   * 根据文章ID查询 标签列表
   * @param articleId
   * @return
   */
  List<Tag> findTagsByArticleId(Long articleId);

  /**
   * 查询最热的标签 前n条
   *
   * @param limit
   * @return
   */
  List<Long> findHotsTagIds(int limit);

  /**
   * 根据tagId获取tag对象
   * @param tagIds
   * @return
   */
  List<Tag> findTagsByTagIds(List<Long> tagIds);
}
