# Blog Application

This is a Spring Boot application for a blogging platform. It provides various endpoints to manage blog posts, comments, and users.

## Getting Started

### Prerequisites

- Java 11 or higher
- Maven
- Spring Boot

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/blog.git
    ```
2. Navigate to the project directory:
    ```bash
    cd blog
    ```
3. Build the project:
    ```bash
    mvn clean install
    ```

### Running the Application

To run the application, use the following command:
```bash
mvn spring-boot:run
```

The application will start on `http://localhost:4000`.

## API Endpoints

You can access the API documentation and test the endpoints using Swagger UI:
[Swagger UI](http://localhost:4000/swagger-ui/index.html#)

### Blog Posts

- `GET /api/posts` - Retrieve all blog posts
- `GET /api/posts/{id}` - Retrieve a specific blog post by ID
- `POST /api/posts` - Create a new blog post
- `PUT /api/posts/{id}` - Update an existing blog post by ID
- `DELETE /api/posts/{id}` - Delete a blog post by ID

### Comments

- `GET /api/posts/{postId}/comments` - Retrieve all comments for a specific blog post
- `POST /api/posts/{postId}/comments` - Add a comment to a specific blog post
- `DELETE /api/posts/{postId}/comments/{commentId}` - Delete a comment by ID

### Users

- `GET /api/users` - Retrieve all users
- `GET /api/users/{id}` - Retrieve a specific user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/{id}` - Update an existing user by ID
- `DELETE /api/users/{id}` - Delete a user by ID

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
