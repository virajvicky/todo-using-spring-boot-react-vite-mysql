// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import EditTodo from './components/EditTodo';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => (
  <Router>
    <Header />
    <Navbar />

    <main className="container my-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtodo" element={<TodoForm />} />
        <Route path="/showtodo" element={<TodoList />} />
        <Route path="/edittodo/:id" element={<EditTodo />} />
      </Routes>
    </main>

    <Footer />
  </Router>
);

export default App;
