import sequelize from "../database/database.js";
import { DataTypes } from "sequelize";

const Turma = sequelize.define('turma',
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
        semestre: {
            type: DataTypes.INTEGER,
        },
        curso: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'turmas',
        timestamps: true,
});

export default Turma