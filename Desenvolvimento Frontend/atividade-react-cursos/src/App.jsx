import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CourseList from "./components/CourseList";
import CourseForm from "./components/CourseForm";
const cursosIniciais = [
  { id: 1, nome: "React Básico", categoria: "Front-end", cargaHoraria: 20 },
  {
    id: 2,
    nome: "JavaScript Essencial",
    categoria: "Front-end",
    cargaHoraria: 24,
  },
  { id: 3, nome: "Python para Dados", categoria: "Dados", cargaHoraria: 30 },
  { id: 4, nome: "APIs com Node.js", categoria: "Back-end", cargaHoraria: 28 },
  { id: 5, nome: "Banco de Dados SQL", categoria: "Dados", cargaHoraria: 18 },
];
function App() {
  const [cursos, setCursos] = useState(cursosIniciais);
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [favoritos, setFavoritos] = useState([]);
  const cursosFiltrados = cursos.filter((curso) => {
    const correspondeBusca = curso.nome
      .toLowerCase()
      .includes(busca.toLowerCase());
    const correspondeCategoria =
      categoria === "Todos" || curso.categoria === categoria;
    return correspondeBusca && correspondeCategoria;
  });

  function alternarFavorito(id) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favoritoId) => favoritoId !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  }
  function adicionarCurso(novoCurso) {
    const cursoComId = {
      ...novoCurso,
      id: Date.now(),
      cargaHoraria: Number(novoCurso.cargaHoraria),
    };
    setCursos([...cursos, cursoComId]);
  }
  return (
    <div className="app">
      <Header totalCursos={cursos.length} totalFavoritos={favoritos.length} />
      <main className="container">
        <SearchBar
          busca={busca}
          setBusca={setBusca}
          categoria={categoria}
          setCategoria={setCategoria}
        />
        <CourseList
          cursos={cursosFiltrados}
          favoritos={favoritos}
          alternarFavorito={alternarFavorito}
        />
        <CourseForm adicionarCurso={adicionarCurso} />
      </main>
    </div>
  );
}
export default App;
