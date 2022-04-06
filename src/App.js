import './App.css';
import Fighter from './components/Fighter';
import FighterScreen from './components/FighterScreen';
import {useState} from 'react';

const characters = [
  {name: 'Roy', color: 'red'},
  {name: 'Fox', color: 'green'},
  {name: 'Ganondorf', color: 'purple'},
  {name: 'Sheik', color: 'lightskyblue'},
  {name: 'Cloud', color: 'mediumseagreen'},
  {name: 'Falco', color:'orange'},
  {name: 'Samus', color:'firebrick'},
  {name: 'Link', color:'yellow'}
]

function App() {
  const [visible, setVisible] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0])
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {characters.map((element, i) => {
          return(<Fighter  name={element.name} color={element.color} setVisible={setVisible} setSelectedCharacter={setSelectedCharacter}/>)
        })}
      </div>
      <FighterScreen isVisible={visible} setVisible={setVisible} selectedCharacter={selectedCharacter}/>
    </div>
  );
}

export default App;

// how this would look in vanilla js
//const Fighter = {name: 'Roy', color: 'red'}
// each props is a key: 'value' pair