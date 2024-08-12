// app/models/user.ts
import { DataTypes } from 'sequelize';
import sequelize from '@/db/sequlize';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password : {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  tableName: 'users',
  timestamps: true,
});

export default User;
