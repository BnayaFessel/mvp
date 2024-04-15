import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';
export default function NavBar() {
  return (
    <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/transaction">Transaction</Link></li>
                <li><Link to="/orders">Orders</Link></li>
            </ul>
        </nav>
  )
}
