import sequelize from "../database/database.js";
import { DataTypes } from "sequelize";

export const Aluno = sequelize.define('Aluno',
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
        ativo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        tableName: 'alunos',
        timestamps: true,
});