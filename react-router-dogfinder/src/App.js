import { Route, Routes } from 'react-router-dom';
import Nav from "./Nav";

import DogList from './DogList';
import './App.css';
import DogDetails from './DogDetails';
import whiskey from './images/whiskey.jpg';
import perry from './images/perry.jpg';
import duke from './images/duke.jpg';

function App() {
  const dogs = [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: duke,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: perry,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: "",
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ];

  return (
    <div className="App">
      <Nav dogs={dogs} />
      <h1>DogFinder</h1>
      <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails />} />
      </Routes>
    </div>
  );
}

export default App;
