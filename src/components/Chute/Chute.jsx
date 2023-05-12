import "./style.css";
import { useState } from "react";
import palavras from "../../palavras";
import fimDeJogo from "../../scripts/fimDeJogo";

export default function Chute({ jogoIniciado, setJogoIniciado }) {
    const [valor, setValor] = useState('');

    function chutar() {
        // if (palavras[0] === valor) {
        //     fimDeJogo(true);
        // } else {
        //     fimDeJogo(false);
        // }
    }

    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input disabled={!jogoIniciado} type="text" data-test="guess-input" />
            <button disabled={!jogoIniciado} data-test="guess-button" onClick={chutar}>Chutar</button>
        </div>
    );
}