import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => (
  <nav>
    <div>
      <h1 className='brand-name'>Bookstore CMS</h1>
      <ul className='links-container'>
        <li>
          <Link to='/' className='link'>
            Books
          </Link>
        </li>
        <li>
          <Link to='/categories' className='link'>
            Categories
          </Link>
        </li>
      </ul>
    </div>
    
  </nav>
);

export default Navbar;
