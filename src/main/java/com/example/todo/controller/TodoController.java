package com.example.todo.controller;

import com.example.todo.model.Todo;
import com.example.todo.service.TodoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = "http://localhost:5173") // Allows frontend access
public class TodoController {

  @Autowired
  private TodoService todoService;

  @GetMapping
  public List<Todo> getTodos() {
    return todoService.getAllTodos();
  }

  @PostMapping
  public Todo addTodo(@RequestBody Todo todo) {
    return todoService.saveTodo(todo);
  }

  @GetMapping("/{id}") // ✅ Correct method for fetching a todo by ID
  public Todo getTodoById(@PathVariable Long id) {
    return todoService.getTodoById(id);
  }

  @PutMapping("/{id}") // ✅ Correct method for updating a todo
  public Todo editTodo(@PathVariable Long id, @RequestBody Todo todoDetails) {
    return todoService.editTodo(id, todoDetails);
  }

  @DeleteMapping("/{id}")
  public void deleteTodo(@PathVariable Long id) {
    todoService.deleteTodoById(id);
  }
}
