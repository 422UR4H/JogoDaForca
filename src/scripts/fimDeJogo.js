import palavras from "../palavras";
import Palavra from "../components/Palavra/Palavra";

export default function fimDeJogo(vitoria, setBotoesLetras, setPalavraOculta, setJogoIniciado, setErros) {
    let cor;
    if (vitoria) {
        cor = "verde";
    } else {
        cor = "vermelho";
        setErros(6);
    }
    setJogoIniciado(false);
    setBotoesLetras([]);

    setPalavraOculta(<Palavra arrayPalavra={palavras[0].split('')} cor={cor} />);
}