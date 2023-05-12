import Caractere from "./Caractere";
import "./style.css";

export default function Palavra({ arrayPalavra, cor }) {
    console.log(cor);
    return (
        <div className={`palavra ${cor}`}>
            {arrayPalavra.map((c, i) => <Caractere key={i} c={c} />)}
        </div>
    );
}