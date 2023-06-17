import './style.css';
import Palavra from '../Palavra/Palavra';
import alfabeto from '../../scripts/alfabeto';
import palavras from '../../palavras';
import comparator from '../../scripts/comparator';


export default function Jogo(props) {
    const {
        src,
        setCor,
        setBotoesLetras,
        palavraOculta,
        setPalavraOculta,
        setArrayPalavra,
        setJogoIniciado,
        setErros
    } = props;

    function iniciarJogo() {
        palavras.sort(comparator);
        const novoArrayPalavra = palavras[0].split('').map(() => '_');
        setArrayPalavra(novoArrayPalavra);
        setPalavraOculta(<Palavra arrayPalavra={novoArrayPalavra} cor={""} />);
        setBotoesLetras([...alfabeto]);
        setJogoIniciado(true);
        setCor("");
        setErros(0);
    }

    return (
        <div className="jogo">
            <img className="forca" src={src} data-test="game-image" />
            <div>
                <button data-test="choose-word" onClick={() => iniciarJogo()}>
                    Escolher Palavra
                </button>

                {palavraOculta}
            </div>
        </div>
    );
}