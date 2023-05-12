import "./style.css";
import palavras from "../../scripts/palavras";
import Palavra from "../Palavra/Palavra";
import fimDeJogo from "../../scripts/fimDeJogo";

export default function Letra({ letra, cor, setCor, botoesLetras, setBotoesLetras, incrementaErros, setPalavraOculta, arrayPalavra, setArrayPalavra }) {
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

            let novaCor = cor;
            if (!novaArrayPalavra.includes('_')) {
                fimDeJogo(true, setCor, setBotoesLetras, setPalavraOculta);
                novaCor = "verde";
            }

            setPalavraOculta(<Palavra arrayPalavra={novaArrayPalavra} cor={novaCor} />);
        } else {
            incrementaErros();
        }
    }

    return (botoesLetras.includes(letra) ?
        <button data-test="letter" onClick={onPlay} className="letra">{letra.toUpperCase()}</button> :
        <button disabled data-test="letter" onClick={onPlay} className="letra">{letra.toUpperCase()}</button>
    );
}