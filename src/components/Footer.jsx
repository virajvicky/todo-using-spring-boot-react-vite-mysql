// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} Todo App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
