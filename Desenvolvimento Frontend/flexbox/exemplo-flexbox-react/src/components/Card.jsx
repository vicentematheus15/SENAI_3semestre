function Card({ titulo, descricao }) {
  return (
    <article className="card">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <button>Ver detalhes</button>
    </article>
  );
}

export default Card;