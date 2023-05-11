import Letra from './Letra';
import "./style.css";
import alfabeto from "../../scripts/alfabeto"


export default function Letras({ botoesLetras, setBotoesLetras, setErros }) {
    return (
        <div className="letras">
            {alfabeto.map((letra) =>
                <Letra key={letra}
                    letra={letra}
                    botoesLetras={botoesLetras}
                    setBotoesLetras={setBotoesLetras}
                    setErros={setErros}
                />
            )}
        </div>
    );
}