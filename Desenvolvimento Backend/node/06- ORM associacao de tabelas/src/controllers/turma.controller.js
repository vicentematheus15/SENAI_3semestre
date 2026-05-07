import sequelize from "../database/database.js";
import { Aluno, Turma } from "../models/index.js";
import { Op, Sequelize } from "sequelize";

export async function filtrarTurmas(req, res){
    try {
        const turmasFiltradas = await Turma.findAll({
            attributes: ['nome', 'semestre'], //essa linha não ta fazendo efeito
            where: {
                [Op.and]: [
                    {
                        [Op.or]: [
                            { nome: { [Op.iLike]: '%EDM%' } }, 
                            { nome: { [Op.iLike]: '%EDM%' } }
                        ]
                    }, {
                        semestre: { [Op.between]: [ 1, 4 ] }
                    }
                ]
            }, 
            include: {
                model: Aluno,
                attributes: []
            },
            attributes: {
                include: [
                    [sequelize.fn('COUNT', sequelize.col('Alunos.id')), 'totalAlunos']
                ]
            },    
            group: ['Turma.id']
        });
        console.log(`Turmas encontradas: ${turmasFiltradas.length}`);
        
        return res.status(200).json(turmasFiltradas)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: 'Erro interno do servidor' });
    }
}