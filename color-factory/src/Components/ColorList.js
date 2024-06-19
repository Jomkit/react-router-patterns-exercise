import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import './ColorList.css';

const ColorList = ({colors}) => {

  return (
    <>
        <Header />
        <div className='ColorList'>
            <p>Please select a color.</p>
            {colors.map( ({ name, value }) => (
                <Link key={name} to={`/colors/${name}`} state={value}>{name}</Link>
            ))}
        </div>
    </>
  )
}

export default ColorList