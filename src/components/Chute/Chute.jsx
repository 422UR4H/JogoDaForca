import "./style.css";
import { useState } from "react";
import palavras from "../../palavras";
import fimDeJogo from "../../scripts/fimDeJogo";

export default function Chute({ jogoIniciado, setJogoIniciado, setBotoesLetras, setPalavraOculta, setErros }) {
    const [valor, setValor] = useState('');

    function chutar() {
        if (valor === '') {
            return;
        }
        const vitoria = palavras[0] === valor;
        fimDeJogo(vitoria, setBotoesLetras, setPalavraOculta, setJogoIniciado, setErros);
        setValor('');
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            chutar();
        }
    }

    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input disabled={!jogoIniciado}
                type="text"
                value={valor}
                data-test="guess-input"
                onChange={(e) => setValor(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button disabled={!jogoIniciado}
                data-test="guess-button"
                onClick={chutar}
            >Chutar</button>
        </div>
    );
}