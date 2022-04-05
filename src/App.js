import './App.css';
import Fighter from './components/Fighter';

function App() {
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        <Fighter  name={'Roy'} color={'#fff'} />
        <Fighter name={'Fox'} color={'green'} />
        <Fighter name={'Ganondorf'} color={'purple'} />
        <Fighter name={'Sheik'} color={'lightblue'} />
      </div>
      <div classNAme="fighter-screen">
        <h2>Roy</h2>
        <img src="https://www.smashbros.com/assets_v2/img/fighter/roy/main.png" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, modi nobis. Vero harum ratione nostrum suscipit doloribus dolorum, vel asperiores non quidem, quibusdam atque laudantium culpa unde labore velit. Similique.
        </p>
      </div>
    </div>
  );
}

export default App;

// how this would look in vanilla js
//const Fighter = {name: 'Roy', color: 'red'}
// each props is a key: 'value' pair