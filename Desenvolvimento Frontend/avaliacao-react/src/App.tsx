import { useState } from 'react';
import './App.css';
function App() {
  // Controla qual tela será exibida: inicio ou cadastro.
  
  // a troca de telas acontece de acordo com as funções mostrarTelaInicio e mostrarTelaCadastro. Os botões chamam essas funções por meio do "onClick" e definem qual a tela que deve ser mostrada "inicio" ou "cadastro". Quando essas funções são chamadas, usam o "setTelaAtual" para mudar o estado da "telaAtual".

  const [telaAtual, setTelaAtual] = useState('inicio');
  function mostrarTelaInicio() {
    setTelaAtual('inicio');
  }
  function mostrarTelaCadastro() {
    setTelaAtual('cadastro');
  }
  return (
    <div className="container-principal">
      {telaAtual === 'inicio' && (
        <section className="card">
          <h1 className='titulos'>Inscreva-se já</h1>
          <p>
            Estão abertas as pré inscrições para os cursos gratuitos. Preencha com seus dados e aguarde nosso contato para as próximas etapas 
          </p>
          <button className="botao" onClick={mostrarTelaCadastro}>
            Quero me inscrever
          </button>
        </section>
      )}
      {telaAtual === 'cadastro' && (
        <section className="card">
          <h1 className='titulos'>Dados para inscrição</h1>
          <form className="formulario">
            <div className="grupo-campo">
              <label>Nome completo:</label>
              <input type="text" placeholder="Digite seu nome" />
            </div>
            <div className="grupo-campo">
              <label>Telefone:</label>
              <input type="tel" placeholder="(XX) XXXXX-XXXX" />
            </div>
            <div className="grupo-campo">
              <label>Data de nascimento:</label>
              <input type="date" placeholder="" />
            </div>
            <div className="grupo-campo">
              <label>CPF</label>
              <input type="text" placeholder="Digite seu CPF (apenas números)" />
            </div>
            <button className="botao" type="button">
              Enviar
            </button>
          </form>
          <button className="botao-secundario" onClick={mostrarTelaInicio}>
            Voltar
          </button>
        </section>
      )}
    </div>
  );
}
export default App;