import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Foreign Education</h1>
        <nav>
          <Link className="mr-4" to="/">
            Home
          </Link>
          <Link className="mr-4" to="/successstories">
            Success Stories
          </Link>

          <Link className="mr-4" to="/about">
            About
          </Link>
          <Link className="mr-4" to="/services">
            Services
          </Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
