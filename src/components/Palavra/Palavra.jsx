import "./style.css";
import Caractere from "./Caractere";

export default function Palavra({ arrayPalavra, cor }) {
    return (
        <div className={`palavra ${cor}`} data-test="word">
            {arrayPalavra.map((c, i) => <Caractere key={i} c={c} />)}
        </div>
    );
}