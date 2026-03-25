const servicos = [
  'Cadastro de usuários',
  'Consulta de dados',
  'Relatórios simples',
  'Integração entre componentes',
]

export default function ServicosPage() {
  return (
    <section>
      <h1>Serviços</h1>
      <p>Exemplo de tela com listagem de informações.</p>
      <div className="card-grid">
        {servicos.map((servico) => (
          <article key={servico} className="card">
            <h3>{servico}</h3>
            <p>Este item pode representar uma funcionalidade do sistema.</p>
          </article>
        ))}
      </div>
    </section>
  )
}