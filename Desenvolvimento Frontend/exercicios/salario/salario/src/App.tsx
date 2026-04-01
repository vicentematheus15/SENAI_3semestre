import { useState } from 'react'
import './App.css'

function App() {
  const [salarioBase, setSalarioBase] = useState<string>('');
  const [aumento, setAumento] = useState<string>('');
  const [novoSalario, setNovoSalario] = useState<number>()
  

  function calcularAumento(){
    const sal = Number(salarioBase);
    const a = Number(aumento)

    const percentAumento = (sal * a) /100
    const novoSal = sal + percentAumento;
    return setNovoSalario(novoSal)
  }

  return(
    <section>
      <div>  
        <input
          id='salarioBase'
          value={salarioBase}
          onChange={(e) => setSalarioBase(e.target.value)}
        />

        <input 
          id='aumento'
          value={aumento}
          onChange={(e) => setAumento(e.target.value)}
        />
      </div>
      <div>
        <button onClick={calcularAumento}>Calcular</button>
      </div>
      <h2>{novoSalario}</h2>
    </section>
  )
}

export default App
