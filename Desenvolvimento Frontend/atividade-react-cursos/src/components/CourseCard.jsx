function CourseCard({ curso, favorito, alternarFavorito }) {
  return (
    <article className={favorito ? "card favorito" : "card"}>
      <h2>{curso.nome}</h2>
      <p>
        <strong>Categoria:</strong> {curso.categoria}
      </p>
      <p>
        <strong>Carga horária:</strong> {curso.cargaHoraria} horas
      </p>
      {favorito && <p className="selo">Curso favorito</p>}
      <button onClick={() => alternarFavorito(curso.id)}>
        {favorito ? "Remover dos favoritos" : "Marcar como favorito"}
      </button>
    </article>
  );
}
export default CourseCard;
