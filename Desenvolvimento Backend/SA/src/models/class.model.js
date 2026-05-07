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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        curso: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'turma',
        timestamps: true,
});

export default Turma