import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTodoById, updateTodoById } from '../services/TodoService';

const EditTodo = () => {
    const { id } = useParams();
    const [task, setTask] = useState('');
    const [details, setDetails] = useState('');
    const navigate = useNavigate();

        const fetchTodos = async () => {
            const todo = await getTodoById(id);  // ✅ Fetching a single task
            setTask(todo.task);
            setDetails(todo.details);
        };

        useEffect(() => {
        fetchTodos();
         }, [id]);

         const handleSubmit = async (e) => {
          e.preventDefault();  // ✅ Prevent default form submission
         await updateTodoById(id, { task, details });  // ✅ Now updateTodo expects id + updatedTask
         navigate('/');
         };

    return(
        <form onSubmit={handleSubmit} className="container mt-4">
    <div className="mb-3">
        <label className="form-label">Task</label>
        <input
            type="text"
            className="form-control"
            placeholder="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
        />
    </div>
    <div className="mb-3">
        <label className="form-label">Details</label>
        <input
            type="text"
            className="form-control"
            placeholder="Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
        />
    </div>
    <button type="submit" className="btn btn-primary">Save</button>
    <button
        type="button"
        className="btn btn-secondary ms-2"
        onClick={() => window.history.back()}
    >
        Cancel
    </button>
</form>

    );
};

export default EditTodo;
