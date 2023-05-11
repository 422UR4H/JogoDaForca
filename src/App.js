import { useState } from 'react';
import Jogo from './components/Jogo/Jogo';
import Letras from './components/Letras/Letras';
import palavras from './scripts/palavras';
import comparator from './scripts/comparator';
import forca0 from './assets/images/forca0.png';
import forca1 from './assets/images/forca1.png';
import forca2 from './assets/images/forca2.png';
import forca3 from './assets/images/forca3.png';
import forca4 from './assets/images/forca4.png';
import forca5 from './assets/images/forca5.png';
import forca6 from './assets/images/forca6.png';


function App() {
  const [erros, setErros] = useState(0);
  const [desabilitado, setDesabilitado] = useState("true");
  const [botoesLetras, setBotoesLetras] = useState([]);
  const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

  palavras.sort(comparator);

  function incrementaErros() {
    setErros(erros + 1);
  }

  return (
    <div className="App">
      <Jogo src={forca[erros]} alt="forca0" palavra={palavras[0]} setBotoesLetras={setBotoesLetras} />
      <Letras botoesLetras={botoesLetras} setBotoesLetras={setBotoesLetras} setErros={incrementaErros} />
    </div>
  );
}

export default App;
