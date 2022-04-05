import './App.css';
import Fighter from './components/Fighter';
import FighterScreen from './components/FighterScreen';
import {useState} from 'react';

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        <Fighter  name={'Roy'} color={'#fff'} setVisible={setVisible}/>
        <Fighter name={'Fox'} color={'green'} setVisible={setVisible} />
        <Fighter name={'Ganondorf'} color={'purple'} />
        <Fighter name={'Sheik'} color={'lightblue'} />
      </div>
      <FighterScreen isVisible={visible} setVisible={setVisible}/>
    </div>
  );
}

export default App;

// how this would look in vanilla js
//const Fighter = {name: 'Roy', color: 'red'}
// each props is a key: 'value' pair