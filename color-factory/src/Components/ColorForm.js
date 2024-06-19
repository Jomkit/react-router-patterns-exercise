import React, { useState } from 'react'
import "./ColorForm.css";
import { useNavigate } from 'react-router-dom';

const ColorForm = ({ addColor }) => {
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        colorName: "",
        colorValue: "#000000",
    })

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData( data => ({
            ...data,
            [name]: value,
        }))
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log("Color", formData.colorName, "value", formData.colorValue);
        addColor(formData.colorName, formData.colorValue);
        Navigate('/colors');
    }
  return (
    <div className='ColorForm-background'>
        <h1>Color Form</h1>
        <form className='ColorForm' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='colorName'>Color Name:</label>
                <input 
                id='colorName'
                name="colorName"
                type='text' 
                placeholder='color' 
                value={formData.colorName}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='colorValue'>Color Value:</label>
                <input 
                id='colorValue'
                name='colorValue'
                type='color' 
                placeholder='color' 
                value={formData.colorValue}
                onChange={handleChange}
                />
            </div>
            <div>
                <button>Add this color</button>
            </div>
        </form>
    </div>
  )
}

export default ColorForm