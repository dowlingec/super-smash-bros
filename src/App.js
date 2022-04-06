import { useState } from 'react';

const characters = [
  {name: 'Roy', color: ['firebrick', 'lightblue']},
  {name: 'Fox', color: ['green', 'brown']},
  {name: 'Ganondorf', color: ['white', 'midnightblue']},
  {name: 'Sheik', color: ['lightskyblue', 'white']},
  {name: 'Cloud', color: ['mediumseagreen', 'gold']},
  {name: 'Falco', color: ['purple', 'lightskyblue']},
  {name: 'Byleth', color: ['teal', '#d33']},
  {name: 'Link', color: ['lightblue', 'goldenrod']},
]

function App() {
  const [visible, setVisible] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0])
  return (
    <div className="App">
     <h1>FIGHTERS</h1>
     <div className="fighters-grid">
        {characters.map((element) => {
          return (<Fighter name={element.name} color={element.color} setVisible={setVisible} setSelectedCharacter={setSelectedCharacter} />)