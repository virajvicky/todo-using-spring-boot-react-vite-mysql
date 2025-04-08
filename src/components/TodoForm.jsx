import { useState } from 'react';
import { addTodo } from '../services/TodoService';
import { useNavigate } from 'react-router-dom';

const TodoForm = () => {
    const [task, setTask] = useState('');
    const [details, setDetails] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addTodo({ task, details });
        navigate('/'); // Redirect to home after adding the task
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
    <div className="mb-3">
        <label className="form-label">Task</label>
        <input
            type="text"
            className="form-control"
            placeholder="Task"
            value={task}
            onChange={(event) => setTask(event.target.value)}
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
            onChange={(event) => setDetails(event.target.value)}
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

    );//return close
};//function close

export default TodoForm;
