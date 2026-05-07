import { DataTypes } from 'sequelize';
import sequelize from   '../database/database.js';

const Turma = sequelize.define('Turma', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    semestre: { type: DataTypes.INTEGER },
    curso: { type: DataTypes.STRING }
}, {
        tableName: 'turma',
        timestamps: true,
})

export default Turma;