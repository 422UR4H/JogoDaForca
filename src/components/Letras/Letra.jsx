import "./style.css";

export default function Letra({ letra, botoesLetras, setBotoesLetras }) {
    function onPlay() {
        setBotoesLetras(botoesLetras.filter((l) => l !== letra));

        /*if (palavras[0].contains(letraSelecionada)) {
            // mostrar o caractere no underline
    
            // desativar botão
    
        }*/
    }

    return (botoesLetras.includes(letra) ?
        <button onClick={onPlay} className="letra">{letra.toUpperCase()}</button> :
        <button disabled onClick={onPlay} className="letra">{letra.toUpperCase()}</button>
    );
}