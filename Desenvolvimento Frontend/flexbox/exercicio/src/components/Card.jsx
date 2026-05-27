function Card ({titulo, descricao}) {
    return(
        <article className="card">
            <h2 className="card-titulo">{titulo}</h2>

            <p className="card-descricao">
                {descricao}
            </p>

            <button className="card-botao">
                Ver detalhes
            </button>
        </article>
    )
}

export default Card