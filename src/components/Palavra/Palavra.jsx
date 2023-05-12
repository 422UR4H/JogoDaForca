import Caractere from "./Caractere";
import "./style.css";

export default function Palavra({ arrayPalavra }) {
    return (
        <div className="palavra">
            {arrayPalavra.map((c, i) => <Caractere key={i} c={c} />)}
        </div>
    );
}