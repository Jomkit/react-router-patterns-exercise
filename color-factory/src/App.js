import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ColorList from './Components/ColorList';
import ColorPage from './Components/ColorPage';
import ColorForm from './Components/ColorForm';
import { useEffect, useState } from 'react';

function App() {
  const INITIALCOLORS = [
    {name: 'red', value: '#ff0000'}, 
    {name: 'blue', value: '#0000FF'}, 
    {name: 'green', value: '#00FF00'}
];
const [colors, setColors] = useState(INITIALCOLORS);

useEffect(function getLocalColors(){
  const localColors = localStorage.getItem("colors");

  localColors ? setColors(JSON.parse(localColors)) : setColors(INITIALCOLORS);
},[])

const addColor = (name, value) => {
  let colorsToAdd = [
    ...colors,
    {name: name, value: value}
];
    setColors(colorsToAdd);
    localStorage.setItem("colors", JSON.stringify(colorsToAdd));
}
  return (
    <div className="App">
      <Routes>
        <Route exact path='/colors' element={<ColorList colors={colors} />} />
        <Route exact path='/colors/new' element={<ColorForm addColor={addColor} />} />
        <Route exact path='/colors/:name' element={<ColorPage />} />
        <Route path='*' element={<Navigate to="/colors" />} />
      </Routes>
    </div>
  );
}

export default App;
