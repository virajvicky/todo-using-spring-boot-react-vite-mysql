package com.example.todo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.example.todo.repository") // Ensures repositories are scanned
public class TodoApplication {
  public static void main(String[] args) {
    SpringApplication.run(TodoApplication.class, args);
  }
}
