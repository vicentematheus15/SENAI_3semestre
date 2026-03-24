import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [idade, setIdade] = useState(25)
  const [valor1, setVAlor1] = useState(9)
  const [valor2, setValor2] = useState(11)
  return (
    <>
      <section id="center">
        <div className="hero">
          
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <p>Idade: {idade}</p>
        <p>Soma {valor1 + valor2}</p>
      </section>

      <div className="ticks"></div>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
