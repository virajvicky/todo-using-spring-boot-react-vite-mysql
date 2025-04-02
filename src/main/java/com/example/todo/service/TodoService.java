package com.example.todo.service;

import com.example.todo.model.Todo;
import com.example.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TodoService {

  @Autowired
  private TodoRepository todoRepository;

  public List<Todo> getAllTodos() {
    return todoRepository.findAll();
  }

  public Todo saveTodo(Todo todo) {
    return todoRepository.save(todo);
  }

  public Todo editTodo(Long id, Todo todoDetails) {
    Todo todo = todoRepository.findById(id).orElseThrow(() -> new RuntimeException("Todo not found"));

    if (todoDetails.getTask() != null) {
      todo.setTask(todoDetails.getTask());
    }
    if (todoDetails.getDetails() != null) {
      todo.setDetails(todoDetails.getDetails());
    }

    return todoRepository.save(todo);
  }

  public Todo getTodoById(Long id) {
    return todoRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Todo not found"));
  }

  public void deleteTodoById(Long id) {
    if (!todoRepository.existsById(id)) {
      throw new RuntimeException("Todo not found");
    }
    todoRepository.deleteById(id);
  }
}
