import { Route, Routes } from 'react-router-dom';
import './App.css';
import Operation from './Operation';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:operation/:num1/:num2" element={<Operation />} />
      </Routes>
    </div>
  );
}

export default App;
