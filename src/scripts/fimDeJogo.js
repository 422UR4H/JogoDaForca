import palavras from "../palavras";
import Palavra from "../components/Palavra/Palavra";

export default function fimDeJogo(vitoria, setBotoesLetras, setPalavraOculta, setJogoIniciado) {
    setBotoesLetras([]);

    let cor;
    if (vitoria) {
        cor = "verde";
    } else {
        cor = "vermelho";
    }
    setJogoIniciado(false);

    setPalavraOculta(<Palavra arrayPalavra={palavras[0].split('')} cor={cor} />);
}