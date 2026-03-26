import * as model from '../model/modelAlunos.js'

export function listarAlunos(req, res){
    const listaAlunos = model.listarAlunosDB();
    if(!listaAlunos){
        return res.status(404).json({mensagem: "Requiição não pode ser processada!"})
    }
    return res.status(200).json(listaAlunos)
}

export function criarAluno(req, res){
    const {nome, nota} = req.body;
    if(!nome || !nota){
        return res.status(400).json({mensagem: "Dados obrigatórios não informados"})
    }

    const novoAluno = model.criarAlunoDB(nome, nota);
    return res.status(201).json(novoAluno)
}