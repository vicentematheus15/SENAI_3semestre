import sequelize from "../database/database.js";
import { Aluno, Turma } from "../models/student.model.js";
import { Op } from 'sequelize';

export async function filterClass(req, res){
    try {
        const turmasFiltradas = await Turma.findAll({
            where: {
                [Op.and]: [
                    {
                        [Op.or]: [
                            { nome: { [Op.iLike]: '%DSM%' } }, 
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
            group: ['turma.id']
        });

        console.log(`Turmas encontradas: ${turmasFiltradas.length}`);
        return res.status(200).json(turmasFiltradas)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: 'Erro ao buscar turma', error });
    }
}