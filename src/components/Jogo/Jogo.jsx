import Palavra from '../Palavra/Palavra';
import alfabeto from '../../scripts/alfabeto';
import palavras from '../../scripts/palavras';
import comparator from '../../scripts/comparator';
import './style.css';


export default function Jogo({ src, alt, setCor, setBotoesLetras, palavraOculta, setPalavraOculta, setArrayPalavra, setErros }) {
    function iniciarJogo() {
        palavras.sort(comparator);
        const novoArrayPalavra = palavras[0].split('').map(() => '_');
        setArrayPalavra(novoArrayPalavra);
        setPalavraOculta(<Palavra arrayPalavra={novoArrayPalavra} cor={""} />);
        setBotoesLetras([...alfabeto]);
        setCor("");
        setErros(0);
    }

    return (
        <div className="jogo">
            <img className="forca" src={src} alt={alt} />
            <div>
                <button onClick={() => iniciarJogo()}>Escolher Palavra</button>
                {palavraOculta}
            </div>
        </div>
    );
}