// const { Sequelize, DataTypes } = require('sequelize');
import { DataTypes } from "sequelize"
// const sequelize = new Sequelize('sqlite::memory:');
import { sequelize } from "../config/connDB.js";

export const UsersModel = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
  },
  {
    timestamps: true, 
    tableName: "usuarios2025"
  },
);

// let usuarios=await UsersModel.findAll()