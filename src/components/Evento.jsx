
export default function Evento({titulo, descricao, horario, local}){
    return(
        <section className="evento">
            <div className="informacao">
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <p>{horario}</p>
                <p>{local}</p>
            </div>
            <img src="images.jpg" alt="imagem" />
        </section>
    )
}

