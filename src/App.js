import logo from './logo.svg';
import './App.css';
import Jogo from './components/Jogo';
import Letras from './components/Letras';

const img = "forca0";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Jogo src="../public/assets/images/forca0.png" alt="forca0" />
      <Letras />
    </div>
  );
}

export default App;
