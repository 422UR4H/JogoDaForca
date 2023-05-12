import "./style.css";
import palavras from "../../scripts/palavras";
import Palavra from "../Palavra/Palavra";

export default function Letra({ letra, botoesLetras, setBotoesLetras, setErros, setPalavraOculta, arrayPalavra, setArrayPalavra }) {
    function onPlay() {
        // desabilitando botão clicado
        setBotoesLetras(botoesLetras.filter((l) => l !== letra));

        if (palavras[0].includes(letra)) {
            const novaArrayPalavra = [...arrayPalavra];
            console.log(arrayPalavra, novaArrayPalavra);

            for (let i = 0; i < arrayPalavra.length; i++) {
                if (palavras[0][i] === letra) {
                    novaArrayPalavra[i] = letra;
                }
            }
            setArrayPalavra(novaArrayPalavra);
            
            setPalavraOculta(<Palavra arrayPalavra={novaArrayPalavra} />);
        } else {
            setErros();
        }
    }

    return (botoesLetras.includes(letra) ?
        <button onClick={onPlay} className="letra">{letra.toUpperCase()}</button> :
        <button disabled className="letra">{letra.toUpperCase()}</button>
    );
}