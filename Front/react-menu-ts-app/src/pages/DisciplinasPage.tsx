// const disciplinas = [
//     'Lógica de Programação',
//     'Introdução a Eletroeletrônica',
//     'Programação de Aplicativos',
//     'Banco de Dados',
//     'Modelagem de Sistemas',
//     'Desenvilvimento de Sistemas',
//     'Teste de Sistemas'
// ]
const disciplinas = [
    {nome: 'Lógica de Programação', professor: 'Sérgio'},
    {nome: 'Introdução a Eletroeletrônica', professor: 'Bruno'},
    {nome: 'Banco de Dados', professor: 'Sérgio' },
    {nome: 'Modelagem de Sistemas', professor: 'Gustavo'},
    {nome: 'Programação de Aplicativos', professor: 'Óscar'},
    {nome: 'Desenvolvimento Backend', professor: 'Natan'},
    {nome: 'Desenvolvimento Frontend', professor: 'Marcelo'},
    {nome: 'Teste de Sistemas', professor: 'Rafael'}
]

export default function DisciplinasPage() {
    return (
        <section>
            <h1>Disciplinas</h1>
            <p>Lista com disciplinas Cursadas até o momento</p>
            <div className="card-grid">
                {disciplinas.map((disciplina) => (
                    <article className="card">
                        <h3>{disciplina.nome}</h3>
                        <p>{disciplina.professor}</p>
                    </article>
                ))}

            </div>
            {/* <div>
                <ul>
                {disciplinas.map((disciplina) => (
                        <li>{disciplina}</li>
                    ))}
                </ul>
            </div> */}
        </section>
    )
}