import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import LoginBox from './components/LoginBox';

function App() {
  return (
    <div className="pagina">
      <Header />
      <Hero />

      <section className="cards">
        <Card
          titulo="Cards"
          descricao="Aprenda a criar blocos de conteúdo usando Flexbox."
        />
        <Card
          titulo="Área principal"
          descricao="Organize textos e imagens lado a lado."
        />
        <Card
          titulo="Responsividade"
          descricao="Adapte o layout para celulares e tablets."
        />
      </section>

      <LoginBox />

      <footer className="rodape">
        <p>Projeto React desenvolvido com Flexbox</p>
      </footer>
    </div>
  );
}

export default App;
