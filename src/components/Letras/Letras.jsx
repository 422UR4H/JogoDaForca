import Letra from './Letra';
import "./style.css";
import alfabeto from "../../scripts/alfabeto"


export default function Letras({ botoesLetras, setBotoesLetras, incrementaErros, setPalavraOculta, arrayPalavra, setArrayPalavra, setJogoIniciado, setErros, cor }) {
    return (
        <div className="letras">
            {alfabeto.map((letra) =>
                <Letra key={letra}
                    letra={letra}
                    cor={cor}
                    botoesLetras={botoesLetras}
                    setBotoesLetras={setBotoesLetras}
                    incrementaErros={incrementaErros}
                    setPalavraOculta={setPalavraOculta}
                    arrayPalavra={arrayPalavra}
                    setArrayPalavra={setArrayPalavra}
                    setJogoIniciado={setJogoIniciado}
                    setErros={setErros}
                />
            )}
        </div>
    );
}