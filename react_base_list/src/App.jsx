import './App.css';
import Apskritimai from './Components/Apskritimai';
import Keturi from './Components/Keturi';
import Kvadratai from './Components/Kvadratai';
import Penki from './Components/Penki';
import Trys from './Components/Trys';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Kvadratai />

        <Apskritimai />

        <Trys />

        <Keturi />

        <Penki />

      </header>
    </div>
  );
}

export default App;
