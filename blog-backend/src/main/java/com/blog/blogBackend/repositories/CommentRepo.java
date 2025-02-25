package com.blog.blogBackend.repositories;

import com.blog.blogBackend.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepo extends JpaRepository<Comment, Integer> {
}
