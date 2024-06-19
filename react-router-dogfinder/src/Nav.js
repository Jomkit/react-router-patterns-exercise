import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Nav.css";

const Nav = ( {dogs} ) => {
    console.log(dogs);
  return (
    <div className='Nav'>
        <Link to="/dogs">Home</Link>
        {dogs.map( dog => (
            <NavLink to={ `/dogs/${dog.name}`} state={{dog}} >{dog.name}</NavLink>
        ))}
        
    </div>
  )
}

export default Nav