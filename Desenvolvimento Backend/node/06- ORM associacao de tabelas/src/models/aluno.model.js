import sequelize from '../database/database.js';
import { DataTypes } from 'sequelize';

const Aluno = sequelize.define('Aluno', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nome: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true},
    senha: {type: DataTypes.STRING},
    mediaGeral: {type: DataTypes.FLOAT}
    //FK implícita: Sequelize cria turmaId automaticamente
}, {
        tableName: 'alunos',
        timestamps: true,
});


export default Aluno;