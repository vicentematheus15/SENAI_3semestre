import Turma from './turma.model.js';
import Aluno from './aluno.model.js';

Turma.hasMany(Aluno, {foreignKey: 'turmaId'}); //turma possui mais de um aluno
Aluno.belongsTo(Turma,{ foreignKey: 'turmaId'}); //aluno pertece a uma turma

export { Aluno, Turma }