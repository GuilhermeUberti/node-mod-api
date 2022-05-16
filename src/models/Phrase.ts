import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface PhraseInstance extends Model {
    id: number;
    author: string,
    publishing: string
}

export const Phrase = sequelize.define<PhraseInstance>('Phrases', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author: {
        type: DataTypes.STRING
    },
    publishing: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'phrases',
    timestamps: false
})