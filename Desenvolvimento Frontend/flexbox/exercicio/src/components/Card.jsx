function Card ({titulo, descricao}){
    return(
        <article>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <button>Ver detalhes</button>
        </article>
    )
}
export default Card