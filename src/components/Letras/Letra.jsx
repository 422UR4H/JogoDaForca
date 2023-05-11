import "./style.css";
import palavras from "../../scripts/palavras";

export default function Letra({ letra, botoesLetras, setBotoesLetras, setErros }) {
    function onPlay() {
        setBotoesLetras(botoesLetras.filter((l) => l !== letra));

        if (palavras[0].includes(letra)) {
            // mostrar o caractere no underline
        } else {
            setErros();
        }
    }

    return (botoesLetras.includes(letra) ?
        <button onClick={onPlay} className="letra">{letra.toUpperCase()}</button> :
        <button disabled onClick={onPlay} className="letra">{letra.toUpperCase()}</button>
    );
}