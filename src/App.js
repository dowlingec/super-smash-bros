import './App.css';
import Fighter from './components/Fighter';

function App() {
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        <Fighter  name={'Roy'} color={'#fff'}/>
        <Fighter name={'Fox'} color={'green'}/>
        <Fighter name={'Ganondorf'} color={'purple'}/>
      </div>
    </div>
  );
}

export default App;

// how this would look in vanilla js
//const Fighter = {name: 'Roy', color: 'red'}
// each props is a key: 'value' pair