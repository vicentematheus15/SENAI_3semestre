import sequelize from '../database/database';
import { DataTypes } from 'sequelize';
import Turma from './turma.model';

const Aluno = sequelize.define('Aluno', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nome: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true},
    senha: {type: DataTypes.STRING},
    mediaGeral: {type: DataTypes.FLOAT}
    //FK implícita: Sequelize cria turmaId automaticamente
});

Turma.hasMany(Aluno, {foreignKey: 'turmaId'});
Aluno.belongsTo(Turma,{ foreignKey: 'turmaId'});

export { Turma, Aluno};