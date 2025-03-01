package com.blog.blogBackend.controllers;

import com.blog.blogBackend.payloads.ApiResponse;
import com.blog.blogBackend.payloads.CategoryDto;
import com.blog.blogBackend.services.CategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    // create
    @PostMapping("/")
    public ResponseEntity<CategoryDto> createCategory(@Valid @RequestBody CategoryDto categoryDto){
        CategoryDto createCategory = this.categoryService.createCategory(categoryDto);
        return new ResponseEntity<>(createCategory, HttpStatus.CREATED);
    }

    // update
    @PutMapping("/{catId}")
    public  ResponseEntity<CategoryDto> updateCategory(@Valid @RequestBody CategoryDto categoryDto, @PathVariable Integer catId){
        CategoryDto updatedCat = this.categoryService.updateCategory(categoryDto, catId);
        return new ResponseEntity<>(updatedCat, HttpStatus.OK);
    }

    // delete
    @DeleteMapping("/{catId}")
    public ResponseEntity<ApiResponse> deleteCategory(@PathVariable Integer catId){
        this.categoryService.deleteCategory(catId);
        return new ResponseEntity<>(new ApiResponse("Category is Deleted Successfully", true), HttpStatus.OK);
    }

    // Get Single user
    @GetMapping("/{catId}")
    public ResponseEntity<CategoryDto> getCategory(@PathVariable Integer catId){
        CategoryDto categoryDto = this.categoryService.getCategory(catId);
        return new ResponseEntity<>(categoryDto, HttpStatus.OK);
    }

    // Get All Users
    @GetMapping("/")
    public ResponseEntity<List<CategoryDto>> getCategories(){
        List<CategoryDto> categories = this.categoryService.getCategories();
        return ResponseEntity.ok(categories);
    }
}
