import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import LoginBox from './components/LoginBox'

function App() {


  return (
    <main className='pagina'>
    <Header />
    <Hero />

    <section className='cards'>
      <Card 
      titulo = "React"
      descricao = "Desenvolvimento frontend em React.js"
      />

      <Card 
      titulo = "Node"
      descricao = "Desenvolvimento backend em Node.js"
      />

      <Card 
      titulo = "PostgreSQL"
      descricao = "Banco de dados relacionais"
      />
    </section>

    <LoginBox />

      
    </main>
  )
}

export default App
