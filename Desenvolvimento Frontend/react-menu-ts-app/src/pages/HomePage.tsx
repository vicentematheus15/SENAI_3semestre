export default function HomePage() {
  return (
    <section>
      <h1>Bem-vindo ao projeto React com navegação</h1>
      <p>
        Esta é a tela inicial. Aqui o aluno pode visualizar a estrutura base do
        aplicativo e entender como funciona a navegação entre páginas.
      </p>

      <div className="card-grid">
        <article className="card">
          <h3>Menu lateral</h3>
          <p>Abre e fecha com botão de menu.</p>
        </article>
        <article className="card">
          <h3>Barra superior</h3>
          <p>Permite acesso rápido a páginas importantes.</p>
        </article>
        <article className="card">
          <h3>Rotas</h3>
          <p>As telas são trocadas com React Router.</p>
        </article>
      </div>
    </section>
  )
}