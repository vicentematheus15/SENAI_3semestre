function Header({ totalCursos, totalFavoritos }) {
  return (
    <header className="header">
      <div>
        <h1>Painel de Cursos</h1>
        <p>Gerencie cursos usando React.</p>
      </div>
      <div className="resumo">
        <span>{totalCursos} cursos</span>
        <span>{totalFavoritos} favoritos</span>
      </div>
    </header>
  );
}
export default Header;
