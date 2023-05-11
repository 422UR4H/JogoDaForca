import Palavra from '../Palavra/Palavra';
import alfabeto from '../../scripts/alfabeto';
import { useState } from 'react';
import './style.css';


export default function Jogo({ src, alt, palavra, setBotoesLetras }) {
    const [palavraOculta, setPalavraOculta] = useState(<Palavra />);

    function iniciarJogo(palavra) {
        setPalavraOculta(
            <div className="palavra">
                {palavra.split('').map((c, i) => <Palavra key={i} l="_" />)}
            </div>
        );

        setBotoesLetras([...alfabeto]);
    }

    return (
        <div className="jogo">
            <img className="forca" src={src} alt={alt} />
            <div>
                <button onClick={() => iniciarJogo(palavra)}>Escolher Palavra</button>
                {palavraOculta}
            </div>
        </div>
    );
}