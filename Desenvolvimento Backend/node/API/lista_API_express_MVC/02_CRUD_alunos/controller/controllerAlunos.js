import * as model from '../model/modelAlunos.js'

export function listarAlunos(req, res){
    const listaAlunos = model.listarAlunosDB();
    if(!listaAlunos){
        return res.status(404).json({mensagem: "Requiição não pode ser processada!"})
    }
    return res.status(200).json(listaAlunos)
}