import "./style.css";
import palavras from "../../palavras";
import Palavra from "../Palavra/Palavra";
import fimDeJogo from "../../scripts/fimDeJogo";

export default function Letra({ letra, cor, botoesLetras, setBotoesLetras, incrementaErros, setPalavraOculta, arrayPalavra, setArrayPalavra, setJogoIniciado }) {
    function onPlay() {
        // desabilitando botão clicado
        setBotoesLetras(botoesLetras.filter((l) => l !== letra));

        if (palavras[0].includes(letra)) {
            const novaArrayPalavra = [...arrayPalavra];

            for (let i = 0; i < arrayPalavra.length; i++) {
                if (palavras[0][i] === letra) {
                    novaArrayPalavra[i] = letra;
                }
            }
            setArrayPalavra(novaArrayPalavra);

            let novaCor = cor;
            if (!novaArrayPalavra.includes('_')) {
                fimDeJogo(true, setBotoesLetras, setPalavraOculta, setJogoIniciado);
                novaCor = "verde";
            }

            setPalavraOculta(<Palavra arrayPalavra={novaArrayPalavra} cor={novaCor} />);
        } else {
            incrementaErros();
        }
    }

    return (
        <button disabled={!botoesLetras.includes(letra)} data-test="letter" onClick={onPlay} className="letra">
            {letra.toUpperCase()}
        </button>
    );
}