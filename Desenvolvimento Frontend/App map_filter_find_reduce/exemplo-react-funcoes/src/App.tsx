import "./App.css";

function App() {
  const convidados = [
    { id: 1, nome: "Lucas", sobrenome: "Silva", idade: 20 },
    { id: 2, nome: "Maria", sobrenome: "Oliveira", idade: 17 },
    { id: 3, nome: "João", sobrenome: "Santos", idade: 25 },
    { id: 4, nome: "Ana", sobrenome: "Souza", idade: 16 }
  ];

  const novaListaConvidados = [
    { id: 1, nome: "Lucas", sobrenome: "Silva", idade: 20, confirmado: true },
    { id: 2, nome: "Maria", sobrenome: "Oliveira", idade: 17, confirmado: false },
    { id: 3, nome: "João", sobrenome: "Santos", idade: 25, confirmado: false },
    { id: 4, nome: "Ana", sobrenome: "Souza", idade: 16, confirmado: true },
    { id: 5, nome: "José", sobrenome: "Oliveira", idade: 29, confirmado: false },
    { id: 6, nome: "Camila", sobrenome: "Freitas", idade: 16, confirmado: true },
    { id: 7, nome: "Diana", sobrenome: "Moreira", idade: 21, confirmado: true}
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

  const menoresIdade = novaListaConvidados.filter((convidado) => {
    return convidado.idade < 18
  });

  const convidadoAlvo = novaListaConvidados.find((convidado) => {
    return convidado.nome === 'Maria'
  });

  const maiorIdade = novaListaConvidados.reduce((maiorIdade, convidado) => {
    if(convidado.idade > maiorIdade){
        maiorIdade = convidado.idade
    }

    return maiorIdade
  }, 0);

  const confirmados = novaListaConvidados.filter((convidado) => {
    return convidado.confirmado === true
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

      <section className="card">
        <h2>Nova lista de convidados</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Idade</th>
              <th>Confirmado</th>
            </tr>
          </thead>

          <tbody>
            {novaListaConvidados.map((convidado) => (
              <tr key={convidado.id}>
                <td>{convidado.id}</td>
                <td>{convidado.nome}</td>
                <td>{convidado.sobrenome}</td>
                <td>{convidado.idade}</td>
                <td>{convidado.confirmado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="card">
        <h2>1. Filter - Menores de idade</h2>
        <ul>
          {menoresIdade.map((convidado) => (
            <li key={convidado.id}>
              {convidado.nome} - {convidado.idade} anos
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>2. Find - Convidado com nome 'Maria'</h2>
        {convidadoAlvo ? (
          <p>
            Encontrado: {convidadoAlvo.nome} {convidadoAlvo.sobrenome} - Idade: {convidadoAlvo.idade} anos
          </p>
        ) : (
          <p>Nenhum convidado encontrado.</p>
        )}
      </section>

      <section className="card">
        <h2>3. Reduce - Maior idade entre os convidados</h2>
        <p>Maior idade: {maiorIdade}</p>
      </section>

      <section className="card">
        <h2>4.- Filter</h2>
        <p> Convidados confirmados:</p>
        <ul>
          {confirmados.map((convidado) => (
            <li>{convidado.nome} {convidado.sobrenome} </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;