import React from 'react';
import './Navbar.css'; // Import custom CSS for styling

class Navbar extends React.Component {
  render() {
    return (
        <nav className="navbar">
          <div className="navbar-left">
            <span className="logo">SG</span>
          </div>
          <div className="navbar-right">
            <ul className="nav-links">
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;