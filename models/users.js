import db from "../config/db.js";
import { DataTypes } from "sequelize";

const users = db.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  { freezeTableName: true }
);

export default users;
