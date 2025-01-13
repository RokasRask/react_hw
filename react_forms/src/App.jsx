import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './buttons.scss';
import Antras from './Components/Antras';
import Ketvirtas from './Components/Ketvirtas';
import Penktas from './Components/Penktas';
import Pirmas from './Components/Pirmas';
import Trecias from './Components/Trecias';

function App() {
  return (
    <div className="App container py-5">
      <header className="App-header text-center mb-5">
        <h1 className="mb-4">React Komponentai</h1>
        <div className="mb-4">
          <Pirmas />
        </div>
        <div className="mb-4">
          <Antras />
        </div>
        <div className="mb-4">
          <Trecias />
        </div>
        <div className="mb-4">
          <Ketvirtas />
        </div>
        <div className="mb-4">
          <Penktas />
        </div>
      </header>
    </div>
  );
}

export default App;

