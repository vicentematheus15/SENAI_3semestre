import { Aluno, Turma } from "../models/aluno.model.js";
import { Op } from "sequelize";

export async function listarMediaBaixa(req, res){
    try {
        const alunosEmRisco = await Aluno.findAll({
            //atributos que é para retornar da query (dos alunos)
            attributes: ['nome', 'email', 'mediaGeral'],
            where:{ 
                mediaGeral: { [Op.lt]: 6 } 
            },

            //inclui os dados da turma relacionada a cada aluno retornado
            include: {
                model: Turma,
                attributes: ['nome'], //diz quais atributos dessa turma vao ser retornados na query ('nome' dos alunos do 1 ou 2 semestre)
                where: { 
                    [Op.or]:[
                        { semestre: 1 },
                        { semestre: 2 }
                    ]
                }
            },

            order: [['mediaGeral', 'ASC']] //ordena os alunos pela média
        });
    
        console.log(`Total em risco: ${alunosEmRisco.length}`); // mostra a quantidade de alunos que foi retornado na query e que foram armazenados em "alunosEmRisco"
        return res.status(200).json(alunosEmRisco)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: 'Erro interno do servidor' });
    }
}