import "./App.css";

function Header() {
  return (
    <header className="cabecalho">
      <h1>Sistema Biblioteca</h1>
      <p>Exemplo de layout front-end utilizando React</p>
    </header>
  );
}

function Menu() {
  return (
    <nav className="menu">
      <a href="#">Início</a>
      <a href="#">Livros</a>
      <a href="#">Usuários</a>
      <a href="#">Empréstimos</a>
    </nav>
  );
}

function Banner() {
  return (
    <section className="banner">
      <h2>Bem-vindo ao sistema</h2>
      <p>
        Gerencie livros, usuários e empréstimos em uma interface simples,
        organizada e responsiva.
      </p>
    </section>
  );
}

function Card({ titulo, descricao }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}

function Cards() {
  return (
    <section className="cards">
      <Card
        titulo="Livros"
        descricao="Cadastro, consulta e organização dos livros da biblioteca."
      />

      <Card
        titulo="Usuários"
        descricao="Controle de alunos, professores e demais usuários."
      />

      <Card
        titulo="Empréstimos"
        descricao="Registro e acompanhamento dos empréstimos realizados."
      />
    </section>
  );
}

function LivrosDestaque() {
  const livros = [
    { id: 1, titulo: "Introdução ao React", autor: "Ana Souza" },
    { id: 2, titulo: "HTML e CSS na Prática", autor: "Carlos Lima" },
    { id: 3, titulo: "JavaScript Básico", autor: "Mariana Alves" },
    { id: 4, titulo: "Lógica de Programação", autor: "João Santos" },
  ];

  return (
    <section className="secao-livros">
      <h2>Livros em destaque</h2>

      <div className="grid-livros">
        {livros.map((livro) => (
          <div className="livro" key={livro.id}>
            <h3>{livro.titulo}</h3>
            <p>Autor: {livro.autor}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MainContent() {
  return (
    <main className="conteudo">
      <Banner />
      <Cards />
      <LivrosDestaque />
    </main>
  );
}
function Footer() {
  return (
    <footer className="rodape">
      <p>© 2026 - Aula de Front-end com React</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Menu />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
