import Palavra from '../Palavra/Palavra';
import alfabeto from '../../scripts/alfabeto';
import { useState } from 'react';
import './style.css';


export default function Jogo({ src, alt, setBotoesLetras }) {
    const [palavraOculta, setPalavraOculta] = useState(<Palavra />);

    function iniciarJogo() {
        setPalavraOculta(
            <Palavra letra="_" />
        );

        setBotoesLetras([...alfabeto]);
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