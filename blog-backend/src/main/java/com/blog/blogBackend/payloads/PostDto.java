package com.blog.blogBackend.payloads;

import com.blog.blogBackend.entities.Category;
import com.blog.blogBackend.entities.Comment;
import com.blog.blogBackend.entities.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@Getter
@Setter
public class PostDto {

    private Integer postId;

    private String title;

    private String content;

    private String ImgName;

    private Date addedDate;

    private CategoryDto category;

    private UserDto user;

    private Set<CommentDto> comments = new HashSet<>();
}
