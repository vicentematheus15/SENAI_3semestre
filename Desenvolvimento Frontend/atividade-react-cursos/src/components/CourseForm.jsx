import { useState } from "react";
function CourseForm({ adicionarCurso }) {
  const [form, setForm] = useState({
    nome: "",
    categoria: "Front-end",
    cargaHoraria: "",
  });
  function atualizarCampo(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }
  function salvarCurso(event) {
    event.preventDefault();
    if (form.nome.trim() === "" || form.cargaHoraria === "") {
      alert("Preencha o nome e a carga horária.");
      return;
    }
    adicionarCurso(form);
    setForm({ nome: "", categoria: "Front-end", cargaHoraria: "" });
  }
  return (
    <section className="formulario">
      <h2>Cadastrar novo curso</h2>
      <form onSubmit={salvarCurso}>
        <input
          name="nome"
          type="text"
          placeholder="Nome do curso"
          value={form.nome}
          onChange={atualizarCampo}
        />
        <select
          name="categoria"
          value={form.categoria}
          onChange={atualizarCampo}
        >
          <option value="Front-end">Front-end</option>
          <option value="Back-end">Back-end</option>
          <option value="Dados">Dados</option>
        </select>
        <input
          name="cargaHoraria"
          type="number"
          placeholder="Carga horária"
          value={form.cargaHoraria}
          onChange={atualizarCampo}
        />
        <button type="submit">Adicionar curso</button>
      </form>
    </section>
  );
}
