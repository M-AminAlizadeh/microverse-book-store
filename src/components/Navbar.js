import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => (
  <nav>
    <div className="left-side">
      <h1 className="brand-name">Bookstore CMS</h1>
      <ul className="links-container">
        <li>
          <Link to="/" className="link">
            Books
          </Link>
        </li>
        <li>
          <Link to="/categories" className="link">
            Categories
          </Link>
        </li>
      </ul>
    </div>
    <img src="https://img.icons8.com/ios-glyphs/30/0290ff/person-male.png" alt="person-male" />
  </nav>
);

export default Navbar;
