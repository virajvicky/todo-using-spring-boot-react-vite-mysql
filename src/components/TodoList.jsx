import { useEffect, useState } from 'react';
import { getTodos, deleteTodoById } from '../services/TodoService';
import { Link } from 'react-router-dom';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const response = await getTodos();
        setTodos(response);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleDelete = async (id) => {
        await deleteTodoById(id);
        fetchTodos();
    };
    return (
        <div className="container mt-4">
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Id</th>
                <th>Task</th>
                <th>Details</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {todos.map((todo) => (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.task}</td>
                    <td>{todo.details}</td>
                    <td>
                      <Link to={`/edittodo/${todo.id}`} className="btn btn-warning btn-sm me-2">
                        Edit
                      </Link>
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(todo.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );//return close
};//function close

export default TodoList;
