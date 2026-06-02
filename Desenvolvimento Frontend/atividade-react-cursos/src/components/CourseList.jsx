import CourseCard from "./CourseCard";
function CourseList({ cursos, favoritos, alternarFavorito }) {
  if (cursos.length === 0) {
    return <p className="mensagem">Nenhum curso encontrado.</p>;
  }

  return (
    <section className="lista-cursos">
      {cursos.map((curso) => (
        <CourseCard
          key={curso.id}
          curso={curso}
          favorito={favoritos.includes(curso.id)}
          alternarFavorito={alternarFavorito}
        />
      ))}
    </section>
  );
}
export default CourseList;
