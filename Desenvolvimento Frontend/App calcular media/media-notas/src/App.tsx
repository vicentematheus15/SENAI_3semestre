import { useState } from "react";
import "./App.css";

function App() {
  const [nota1, setNota1] = useState<string>("");
  const [nota2, setNota2] = useState<string>("");
  const [nota3, setNota3] = useState<string>("");
  const [media, setMedia] = useState<number | null>(null);
  const [situacao, setSituacao] = useState<string>("");
  const [erro, setErro] = useState<string>("");

  function calcularMedia() {
    setErro("");
    const n1 = Number(nota1);
    const n2 = Number(nota2);
    const n3 = Number(nota3);
    if (nota1 === "" || nota2 === "" || nota3 === "") {
      setMedia(null);
      setSituacao("");
      setErro("Preencha as 3 notas.");
      return;
    }
    if (
      isNaN(n1) ||
      isNaN(n2) ||
      isNaN(n3) ||
      n1 < 0 ||
      n1 > 10 ||
      n2 < 0 ||
      n2 > 10 ||
      n3 < 0 ||
      n3 > 10
    ) {
      setMedia(null);
      setSituacao("");
      setErro("As notas devem estar entre 0 e 10.");
      return;
    }

    const resultado = (n1 + n2 + n3) / 3;
    setMedia(resultado);
    if (resultado >= 7) {
      setSituacao("Aprovado");
    } else if (resultado >= 5) {
      setSituacao("Recuperação");
    } else {
      setSituacao("Reprovado");
    }
  }

  function limparCampos() {
    setNota1("");
    setNota2("");
    setNota3("");
    setMedia(null);
    setSituacao("");
    setErro("");
  }
  return (
    <div className="container">
      <div className="card">
        <h1>Calculadora de Média</h1>
        <p>Digite as 3 notas do aluno:</p>
        <div className="campo">
          <label htmlFor="nota1">Nota 1</label>
          <input
            id="nota1"
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={nota1}
            onChange={(e) => setNota1(e.target.value)}
            placeholder="Digite a nota 1"
          />
        </div>
        <div className="campo">
          <label htmlFor="nota2">Nota 2</label>
          <input
            id="nota2"
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={nota2}
            onChange={(e) => setNota2(e.target.value)}
            placeholder="Digite a nota 2"
          />
        </div>
        <div className="campo">
          <label htmlFor="nota3">Nota 3</label>
          <input
            id="nota3"
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={nota3}
            onChange={(e) => setNota3(e.target.value)}
            placeholder="Digite a nota 3"
          />
        </div>
        <div className="botoes">
          <button onClick={calcularMedia}>Calcular Média</button>
          <button className="btn-limpar" onClick={limparCampos}>
            Limpar
          </button>
        </div>
        {erro && <p className="erro">{erro}</p>}
        {media !== null && (
          <div className="resultado">
            <h2>Resultado</h2>
            <p>
              <strong>Média:</strong> {media.toFixed(2)}
            </p>
            <p>
              <strong>Situação:</strong> {situacao}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
