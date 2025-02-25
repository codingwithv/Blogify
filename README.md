```markdown
# Blog Backend

This is the backend for the Blog application. It is built using Spring Boot and provides a RESTful API for managing blog posts, comments, and user authentication.

## Getting Started

### Prerequisites

- Java 17 or later
- Maven 3.6.3 or later
- PostgreSQL or any other relational database

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/vivekumar4/blog-backend.git
    cd blog-backend
    ```

2. Update the database configuration in `src/main/resources/application.properties`:
    ```properties
    spring.datasource.url=jdbc:postgresql://localhost:5432/blog
    spring.datasource.username=your_username
    spring.datasource.password=your_password
    spring.jpa.hibernate.ddl-auto=update
    ```

3. Build the project:
    ```sh
    mvn clean install
    ```

4. Run the application:
    ```sh
    mvn spring-boot:run
    ```

5. Access the Swagger UI for API documentation:
    [http://localhost:4000/swagger-ui/index.html](http://localhost:4000/swagger-ui/index.html)

## API Endpoints

### Authentication

- **POST /api/v1/auth/register**: Register a new user
- **POST /api/v1/auth/login**: Authenticate a user and get a JWT token

### Users

- **GET /api/v1/users**: Get a list of all users
- **GET /api/v1/users/{id}**: Get details of a specific user
- **PUT /api/v1/users/{id}**: Update a user's details
- **DELETE /api/v1/users/{id}**: Delete a user

### Posts

- **GET /api/v1/posts**: Get a list of all posts
- **GET /api/v1/posts/{id}**: Get details of a specific post
- **POST /api/v1/posts**: Create a new post
- **PUT /api/v1/posts/{id}**: Update a post
- **DELETE /api/v1/posts/{id}**: Delete a post

### Comments

- **GET /api/v1/comments**: Get a list of all comments
- **GET /api/v1/comments/{id}**: Get details of a specific comment
- **POST /api/v1/comments**: Create a new comment
- **PUT /api/v1/comments/{id}**: Update a comment
- **DELETE /api/v1/comments/{id}**: Delete a comment

## Security

The application uses JWT for securing the endpoints. To access the secured endpoints, you need to include the JWT token in the `Authorization` header of your requests.

Example:
```
Authorization: Bearer <your_jwt_token>
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This `README.md` file provides an overview of the project, installation instructions, and details about the available API endpoints.
