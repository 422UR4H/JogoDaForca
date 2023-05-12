import palavras from "../palavras";
import Palavra from "../components/Palavra/Palavra";

export default function fimDeJogo(vitoria, setCor, setBotoesLetras, setPalavraOculta) {
    setBotoesLetras([]);

    let cor;
    if (vitoria) {
        cor = "verde";
    } else {
        cor = "vermelho";
    }
    setCor(cor);

    setPalavraOculta(<Palavra arrayPalavra={palavras[0].split('')} cor={cor} />);
}