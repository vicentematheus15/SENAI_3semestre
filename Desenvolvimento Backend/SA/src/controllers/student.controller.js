import { Aluno, Turma } from "../models/student.model.js";
import Op from 'sequelize'

export async function getAllStudents(req, res){
    try {
        const alunosEmRisco = await Aluno.findByPk({
            attributes: ['nome', 'email', 'mediaGeral'],
            where: {
                mediaGeral: { [Op.lt]: 7.0 }
            },
            include: {
                model: Turma,
                attributes: ['nome', 'semestre'],
                where: {
                    semestre: { [Op.in]: [1,2]}
                }
            },
            order: [['mediaGeral', 'ASC']]
        });

        console.log(`Total em risco: ${alunosEmRisco.length}`);
        return res.status(200).json({alunosEmRisco: alunosEmRisco, total_risco: alunosEmRisco.length});

    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: 'Erro ao buscar aluno', error });
    }
}