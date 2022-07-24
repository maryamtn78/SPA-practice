import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/aboutUs">About Us</Link></li>
        </ul>
            </div>
        );
    }
}

export default Navbar;