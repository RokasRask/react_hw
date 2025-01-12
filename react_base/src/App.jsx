import './App.css';
import Du_tekstai from './Components/Du_tekstai';
import Tekstai_spalva from './Components/Tekstai_spalva';
import Tekstas from './Components/Tekstas';
import ZirB from './Components/ZirB';
import Zuikis from './Components/Zuikis';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Zuikis />

        <Tekstas text="Labas" />

        <ZirB number={1} />
        <ZirB number={2} />

        <Du_tekstai text1="Pirmas tekstas" text2="Antras tekstas" />

        <Tekstai_spalva text1="Pirmas tekstas" text2="Antras tekstas" color="purple" />

      </header>
    </div>
  );
}

export default App;
