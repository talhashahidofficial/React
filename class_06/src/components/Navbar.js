import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-gray-dark sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/images/template-white-logo.png"
            alt="Logo"
            className="h-14 w-auto mr-4"
          />
        </Link>

        {/* Menu */}
        <nav>
          <ul className="flex justify-center space-x-4 text-white">
            <li>
              <Link
                to="/"
                className="hover:text-secondary font-semibold"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                className="hover:text-secondary font-semibold"
              >
                Shop
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
