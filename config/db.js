import { Sequelize } from "sequelize";

const db = new Sequelize("resto_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
