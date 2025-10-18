package com.gssg.blog.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.gssg.blog.dao.mapper.TagMapper;
import com.gssg.blog.dao.pajo.Category;
import com.gssg.blog.dao.pajo.Tag;
import com.gssg.blog.service.TagService;
import com.gssg.blog.vo.Result;
import com.gssg.blog.vo.TagVo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Service
public class TagServiceImpl implements TagService {

  @Autowired
  private TagMapper tagMapper;

  public TagVo copy(Tag tag) {
    TagVo tagVo = new TagVo();
    BeanUtils.copyProperties(tag, tagVo);
    return tagVo;
  }

  public List<TagVo> copyList(List<Tag> tagList) {
    List<TagVo> tagVoList = new ArrayList<>();
    for (Tag tag : tagList) {
      tagVoList.add(copy(tag));
    }
    return tagVoList;
  }

  @Override
  public List<TagVo> findTagsByArticleId(Long articleId) {
    // mybatis plus 无法进行多表查询
    List<Tag> tags = tagMapper.findTagsByArticleId(articleId);
    return copyList(tags);
  }

  @Override
  public Result hots(int limit) {
    /**
     * 1. 标签所拥有的文章数量做多 最热标签
     * 2. 查询 根据tag_id 分组计数，从大到小排列 取前limit
     */
    List<Long> tagIds = tagMapper.findHotsTagIds(limit);

    if (CollectionUtils.isEmpty(tagIds)) {
      return Result.success(Collections.emptyList());
    }

    List<Tag> tagList = tagMapper.findTagsByTagIds(tagIds);

    return Result.success(tagList);
  }

  @Override
  public Result findAll() {
    LambdaQueryWrapper<Tag> queryWrapper = new LambdaQueryWrapper<>();
    queryWrapper.select(Tag::getId, Tag::getTagName);
    List<Tag> tags = tagMapper.selectList(queryWrapper);
    return Result.success(copyList(tags));
  }

  @Override
  public Result findAllDetail() {
    List<Tag> tagList = tagMapper.selectList(new LambdaQueryWrapper<>());
    return Result.success(copyList(tagList));
  }
}
