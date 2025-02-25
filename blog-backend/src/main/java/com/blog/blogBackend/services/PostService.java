package com.blog.blogBackend.services;

import com.blog.blogBackend.entities.Post;
import com.blog.blogBackend.payloads.PostDto;
import com.blog.blogBackend.payloads.PostResponse;

import java.util.List;

public interface PostService {

    // Create
    PostDto createPost(PostDto postDto, Integer userId, Integer categoryId);

    // Update
    PostDto updatePost(PostDto postDto, Integer postId);

    // Delete
    void deletePost(Integer postId);

    // Get all post
    PostResponse getAllPost(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

    // Get single post
    PostDto getPostById(Integer postId);

    // Get all post by category
    PostResponse getPostByCategory(Integer categoryId, Integer pageNumber, Integer pageSize);

    // Get all post by user
    PostResponse getPostByUser(Integer userId, Integer pageNumber, Integer pageSize);

    // Search Post
    List<PostDto> searchPosts(String keyword);

}
