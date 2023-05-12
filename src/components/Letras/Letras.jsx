import Letra from './Letra';
import "./style.css";
import alfabeto from "../../scripts/alfabeto"


export default function Letras({ botoesLetras, setBotoesLetras, incrementaErros, setPalavraOculta, arrayPalavra, setArrayPalavra, cor, setCor }) {
    return (
        <div className="letras">
            {alfabeto.map((letra) =>
                <Letra key={letra}
                    letra={letra}
                    cor={cor}
                    setCor={setCor}
                    botoesLetras={botoesLetras}
                    setBotoesLetras={setBotoesLetras}
                    incrementaErros={incrementaErros}
                    setPalavraOculta={setPalavraOculta}
                    arrayPalavra={arrayPalavra}
                    setArrayPalavra={setArrayPalavra}
                />
            )}
        </div>
    );
}