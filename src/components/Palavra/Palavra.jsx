import Caractere from "./Caractere";
import "./style.css";

export default function Palavra({ arrayPalavra, cor }) {
    return (
        <div className={`palavra ${cor}`} data-test="word">
            {arrayPalavra.map((c, i) => <Caractere key={i} c={c} />)}
        </div>
    );
}