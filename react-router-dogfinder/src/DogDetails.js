import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DogDetails = () => {
    const { name } = useParams();
    const { state } = useLocation();
    const { age, src, facts } = state.dog;
  return (
    <div className='DogDetails'>
        <h2>It's {name}'s page!</h2>
        <img src={src} />
        <p>{name} is {age} years old</p>
        <h3>Fun facts about {name}</h3>
        <ul>
            {facts.map((fact, i) => (<li key={i}>{fact}</li>))}
        </ul>
    </div>
  )
}

export default DogDetails