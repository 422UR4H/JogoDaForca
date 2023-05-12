import { useState } from 'react';
import Jogo from './components/Jogo/Jogo';
import Letras from './components/Letras/Letras';
import fimDeJogo from './scripts/fimDeJogo';
import forca0 from './assets/images/forca0.png';
import forca1 from './assets/images/forca1.png';
import forca2 from './assets/images/forca2.png';
import forca3 from './assets/images/forca3.png';
import forca4 from './assets/images/forca4.png';
import forca5 from './assets/images/forca5.png';
import forca6 from './assets/images/forca6.png';


function App() {
  const [erros, setErros] = useState(0);
  const [cor, setCor] = useState("");
  const [palavraOculta, setPalavraOculta] = useState('');
  const [botoesLetras, setBotoesLetras] = useState([]);
  const [arrayPalavra, setArrayPalavra] = useState(['']);
  const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];


  function incrementaErros() {
    if (erros >= 6) {
      return;
    }
    setErros(erros + 1);
    if (erros >= 5) {
      fimDeJogo(false, setCor, setBotoesLetras, setPalavraOculta);
    }
  }

  return (
    <div className="App">
      <Jogo src={forca[erros]}
        alt="forca0"
        cor={cor}
        setBotoesLetras={setBotoesLetras}
        palavraOculta={palavraOculta}
        setPalavraOculta={setPalavraOculta}
        setArrayPalavra={setArrayPalavra}
      />
      <Letras botoesLetras={botoesLetras}
        setBotoesLetras={setBotoesLetras}
        incrementaErros={incrementaErros}
        palavraOculta={palavraOculta}
        setPalavraOculta={setPalavraOculta}
        arrayPalavra={arrayPalavra}
        setArrayPalavra={setArrayPalavra}
        cor={cor}
        setCor={setCor}
      />
    </div>
  );
}

export default App;
