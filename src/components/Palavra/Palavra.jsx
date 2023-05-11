import Caractere from "./Caractere";
import palavras from "../../scripts/palavras";
import "./style.css";

export default function Palavra({ letra, palavra }) {
    return (
        <div className="palavra">
            {palavras[0].split('').map((c, i) => <Caractere key={i} c={letra} />)}
        </div>
    );
}