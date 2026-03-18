import express from 'express';

const app = express();
app.use(express.json());

let usuarios = [
    {nome: 'fulano', idade: 18},
    {nome: 'cilano', idade: 30}
]
//Rota para Query string
app.get('/produtos', (req, res) => {
    const {id, nome} = req.query;

    if(!id || !nome){
        res.status(404).json({error: "Requisição não pode ser processada"})
    }

    console.log(`id: ${id} e nome: ${nome}`);
    res.status(201).json({id: id, produto: nome});
    
})

//Parâmetro pelo body
app.post('/cadastrar', (req, res) =>{
    const {nome, idade} = req.body;

    if(!nome || !idade){
        res.status(404).json({error: "Requisição não pode ser processada"})
    }

    const novoUser = [{nome: nome, idade: idade}];

    usuarios.push(novoUser);
    res.status(201).json(novoUser);
})

app.listen(3000, ()=>{
    console.log("Servidor rodando em http://localhost:3000");
})