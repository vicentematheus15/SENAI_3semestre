function SearchBar({ busca, setBusca, categoria, setCategoria }) {
  return (
    <section className="filtros">
      <input
        type="text"
        placeholder="Pesquisar curso..."
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
      />
      <select
        value={categoria}
        onChange={(event) => setCategoria(event.target.value)}
      >
        <option value="Todos">Todos</option>
        <option value="Front-end">Front-end</option>
        <option value="Back-end">Back-end</option>
        <option value="Dados">Dados</option>
      </select>
    </section>
  );
}
export default SearchBar;
