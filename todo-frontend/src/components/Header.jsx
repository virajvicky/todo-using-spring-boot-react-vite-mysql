// src/components/Header.jsx
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-white py-3">
 <div className="contcontainer-fluid px-3 d-flex justify-content-between align-items-center">
    <nav>
      <Link to="/" className="btn btn-outline-light me-2">Home</Link>
      <Link to="/addtodo" className="btn btn-outline-light me-2">Add Task</Link>
      <Link to="/showtodo" className="btn btn-outline-light">Show Tasks</Link>
    </nav>
    <h2 className="m-0 me-4">📝 Todo App</h2>
  </div>
</header>

  );
};

export default Header;
