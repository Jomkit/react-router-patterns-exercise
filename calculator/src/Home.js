import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        operation: "",
        num1: 0,
        num2: 0
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value,
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        Navigate(`/${formData.operation}/${formData.num1}/${formData.num2}`);
    }
    
  return (
    <div>
        <h1>Calculator App</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='operation'>Operation</label>
            <select name='operation' id='operation' onChange={handleChange} >
                <option>Choose an operation</option>
                <option value="multiplication">Multiplication</option>
                <option value="division">Division</option>
                <option value="addition">Addition</option>
                <option value="subtraction">Subtraction</option>
            </select>

            <input
                type='number'
                name='num1'
                value={formData.num1}
                onChange={handleChange}
            />
            <input
                type='number'
                name='num2'
                value={formData.num2}
                onChange={handleChange}
            />

            <button>Submit</button>
        </form>
    </div>
  )
}

export default Home