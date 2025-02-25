package com.blog.blogBackend.services;

import com.blog.blogBackend.payloads.CommentDto;

public interface CommentService {

    CommentDto createComment(CommentDto commentDto, Integer postId, Integer userId);

    void deleteComment(Integer commentId);

}
