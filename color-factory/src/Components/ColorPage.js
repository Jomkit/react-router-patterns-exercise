import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import "./ColorPage.css";

const ColorPage = () => {
    const params = useParams();
    const colorValue = useLocation();
    const color = params.name;
  return (
    <div className='ColorPage' style={{backgroundColor: colorValue.state}}>
        <h1>This is {color}.</h1>
        <h1>Isn't it beautiful?</h1>
        <Link to="/colors">Go Back</Link>
    </div>
  )
}

export default ColorPage