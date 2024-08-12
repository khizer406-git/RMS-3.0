import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE as string,
  process.env.POSTGRES_USER as string,
  process.env.POSTGRES_PASSWORD as string,
  {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // You can set this to true if your certificate is properly configured
      },
    },
    logging: false,
  }
);

export default sequelize;
