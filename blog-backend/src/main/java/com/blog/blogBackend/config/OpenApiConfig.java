package com.blog.blogBackend.config;


import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;

@OpenAPIDefinition(
        info = @Info(
                title = "Blog Backend",
                description = "Blog Backend Api",
                summary = "This is Blog backend api for blog application",
                termsOfService = "T&C vivek.com",
                contact = @Contact(
                        name = "Vivek",
                        email = "vivek@gmail.com"
                ),
                license = @License(
                      name = "Your Licence No"
                ),
                version = "v1"
        )
)
public class OpenApiConfig {
}
