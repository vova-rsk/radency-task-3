import { Sequelize, DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';

const dbName= process.env.PG_DB;
const host= process.env.PG_HOST;
const port= process.env.PG_PORT;
const user= process.env.PG_USER;
const password= process.env.PG_PASS;
const uri = `postgres://${user}:${password}@${host}:${port}/${dbName}`;

export const sequelize = new Sequelize(uri);

export class Note extends Model<InferAttributes<Note>, InferCreationAttributes<Note>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare category: string;
    declare content: string;
    declare dates: string[];
    declare icon: string;
    declare status: CreationOptional<'active' | 'archived'>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Note.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull:false
    },
    dates: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull:false
    },
    icon: {
        type: DataTypes.STRING,
        allowNull:false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'active'
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull:false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull:false
    }
    
}, {
    sequelize,
    tableName: 'sequelize_notes',
    timestamps: true,
});

sequelize.sync();