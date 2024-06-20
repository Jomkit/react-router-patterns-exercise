import React from 'react'
import { useParams } from 'react-router-dom'

const Operation = () => {
    const { operation, num1, num2 } = useParams();
    const doMath = () => {
        let result;
        if(operation === "multiplication"){
            result = num1 * num2;
        } else if(operation === "division"){
            result = num1 / num2;
        } else if(operation === "addition"){
            result = parseInt(num1) + parseInt(num2);
        } else if(operation === "subtraction"){
            result = parseInt(num1) - parseInt(num2);
        } 
        return result;
    }
  return (
    <div>
        <h3>Math Operation</h3>
        <p>Operation: {operation}</p>
        <p>num1: {num1}</p>
        <p>num2: {num2}</p>
        <p><b>Answer:</b> {doMath()}</p>
    </div>
  )
}

export default Operation