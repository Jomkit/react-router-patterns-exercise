import React from 'react'
import { Link } from 'react-router-dom'

const DogList = ({ dogs }) => {
    
  return (
    <div>
        <h2>Dogs</h2>
        {dogs.map((dog) => (
            <Link to={`/dogs/${dog.name}`} state={ {dog} }>{dog.name}</Link>
        ))};
    </div>
  )
}

export default DogList