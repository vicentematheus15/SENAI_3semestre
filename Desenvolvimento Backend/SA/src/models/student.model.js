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
            unique: true,
            validate: { isEmail:true} 
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mediaGeral: {
            type: DataTypes.FLOAT,
        }
    }, {
        tableName: 'alunos',
        timestamps: true,
});

export { Aluno, Turma };