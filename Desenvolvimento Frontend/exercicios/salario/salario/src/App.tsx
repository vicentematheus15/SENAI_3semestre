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

  )
}

export default App
