import Turma from "./class.model.js";
import sequelize from "../database/database.js";
import { DataTypes } from "sequelize";

const Aluno = sequelize.define('Aluno',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING
        },
        mediaGeral: {
            type: DataTypes.FLOAT,
        }
    }, {
        tableName: 'alunos',
        timestamps: true,
});

//associações
Turma.hasMany(Aluno, { foreignKey : 'turmaId' }); //turma possui muitos alunos
Aluno.belongsTo(Turma, { foreignKey: 'turmaId' }); //aluno pertence a uma turma

export { Aluno, Turma };