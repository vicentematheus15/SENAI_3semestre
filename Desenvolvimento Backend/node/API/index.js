import express from 'express'; //importando o express

const app = express(); //montando o objeto do express

const usuarios = [
    {id: 1, nome: "Fulano"},
    {id: 2, nome: "Beltrano"},
    {id: 3, nome: "Ciclano"},
];

app.get('/', (req, res) =>{
    console.log("Entrou na API!");
    res.send("API funcionando");
});

app.get('/usuarios', (req, res) =>{
    res.json(usuarios);
});

app.get('/usuarios:id', (req, res) =>{
    const {id} = req.params;
    res.json(usuarios.id)
});

//Iniciando o sevidor
app.listen(3000, ()=>{
    console.log("Api rodando em: http://localhost:3000");
})