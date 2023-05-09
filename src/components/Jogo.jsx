import Palavra from './Palavra'

export default function Jogo(props) {
    return (
        <>
            <img src={props.src} alt={props.alt} />
            <button>Escolher Palavra</button>
            <Palavra />
        </>
    );
}