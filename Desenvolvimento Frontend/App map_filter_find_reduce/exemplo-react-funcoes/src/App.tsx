import "./App.css";

function App() {
  const convidados = [
    { id: 1, nome: "Lucas", sobrenome: "Silva", idade: 20 },
    { id: 2, nome: "Maria", sobrenome: "Oliveira", idade: 17 },
    { id: 3, nome: "João", sobrenome: "Santos", idade: 25 },
    { id: 4, nome: "Ana", sobrenome: "Souza", idade: 16 }
  ];

  const nomes = convidados.map((convidado) => {
    return convidado.nome;
  });

  const maioresDeIdade = convidados.filter((convidado) => {
    return convidado.idade >= 18;
  });

  const convidadoEncontrado = convidados.find((convidado) => {
    return convidado.id === 3;
  });

  const somaIdades = convidados.reduce((total, convidado) => {
    return total + convidado.idade;
  }, 0);

  const mediaIdade = somaIdades / convidados.length;

  const nomesDosMaiores = convidados
    .filter((convidado) => {
      return convidado.idade >= 18;
    })
    .map((convidado) => {
      return convidado.nome;
    });

  return (
    <div className="container">
      <h1>Exemplos com Map, Filter, Find e Reduce</h1>

      <section className="card">
        <h2>Lista original de convidados</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Idade</th>
            </tr>
          </thead>

          <tbody>
            {convidados.map((convidado) => (
              <tr key={convidado.id}>
                <td>{convidado.id}</td>
                <td>{convidado.nome}</td>
                <td>{convidado.sobrenome}</td>
                <td>{convidado.idade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="card">
        <h2>1. Map - Lista apenas com nomes</h2>
        <ul>
          {nomes.map((nome, index) => (
            <li key={index}>{nome}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>2. Filter - Maiores de idade</h2>
        <ul>
          {maioresDeIdade.map((convidado) => (
            <li key={convidado.id}>
              {convidado.nome} - {convidado.idade} anos
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>3. Find - Convidado com ID 3</h2>
        {convidadoEncontrado ? (
          <p>
            Encontrado: {convidadoEncontrado.nome} {convidadoEncontrado.sobrenome},
            idade {convidadoEncontrado.idade}
          </p>
        ) : (
          <p>Nenhum convidado encontrado.</p>
        )}
      </section>

      <section className="card">
        <h2>4. Reduce - Soma e média das idades</h2>
        <p>Soma das idades: {somaIdades}</p>
        <p>Média de idade: {mediaIdade}</p>
      </section>

      <section className="card">
        <h2>5. Encadeamento - Filter + Map</h2>
        <p>Nomes dos maiores de idade:</p>
        <ul>
          {nomesDosMaiores.map((nome, index) => (
            <li key={index}>{nome}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;