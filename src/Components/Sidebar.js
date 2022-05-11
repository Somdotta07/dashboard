import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function Sidebar() {
  return (
      <div className="sidebar">
        <Link to="/"><li className="nav-b">Home</li></Link>
        <Link to="/products"><li className="nav-c">PRODUCTS</li></Link>
    </div>
  )
}

export default Sidebar