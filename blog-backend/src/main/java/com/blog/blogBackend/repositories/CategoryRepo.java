package com.blog.blogBackend.repositories;

import com.blog.blogBackend.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category, Integer> {
}
