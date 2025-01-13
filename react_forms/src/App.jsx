import './App.css';
import './buttons.scss';
import Antras from './Components/Antras';
import Ketvirtas from './Components/Ketvirtas';
import Pirmas from './Components/Pirmas';
import Trecias from './Components/Trecias';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Pirmas />

      <Antras />

      <Trecias />

      <Ketvirtas />

      </header>
    </div>
  );
}

export default App;
