import { useState } from "react";
import './App.css';

function App(){
const [nota1, setnota1] = useState<string>('');
const [nota2, setnota2] = useState<string>('');
const [nota3, setnota3] = useState<string>('');
const [media, setMedia] = useState<Number>();

function calcularMedia(){
  const pesoN1 = Number(1);
  const pesoN2 = Number(3);
  const pesoN3 = Number(2);

  const n1 = Number(nota1) * pesoN1;
  const n2 = Number(nota2) * pesoN2;
  const n3 = Number(nota3) * pesoN3;

  const somaNotas = n1 + n2 + n3;
  const somaPesos = pesoN1 + pesoN2 + pesoN3;

  const mediaPonderada = somaNotas / somaPesos
  return setMedia(mediaPonderada)
}

  return(
    <section>
      <div>
        <label htmlFor="nota1">Nota 1 (peso 1)</label> <br />
        <input
        id="nota1" 
        type="text"
        min='0'
        max='10'
        value={nota1}
        onChange={(e) => setnota1(e.target.value)} 
        />
        <br />
        <label htmlFor="nota2">Nota 2 (peso 3)</label> <br />
        <input 
        id="nota2"
        type="text"
        min='0'
        max='10'
        value={nota2} 
        onChange={(e) => setnota2(e.target.value)}
        />
        <br />
        <label htmlFor="nota3">Nota 3 (peso 2)</label> <br />
        <input 
        id="nota3"
        type="text"
        min='0'
        max='10'
        value={nota3} 
        onChange={(e) => setnota3(e.target.value)}
        />
      </div>
      <div>
        <button onClick={calcularMedia}>Calcular</button>
      </div>
      <div>{media}</div>
    </section>
  )
}

export default App;