import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header'>
        <h2>Welcome to the Color Factory</h2>
        <h1><Link to="/colors/new">Add a Color</Link></h1>
    </div>
  )
}

export default Header