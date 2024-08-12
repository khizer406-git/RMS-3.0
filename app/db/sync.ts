// db/sync.js
import sequelize from "./sequlize";
import User from "@/models/user";

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced successfully');
  } catch (error) {
    console.error('Error syncing database:', error);
  } finally {
    await sequelize.close(); // Close the connection
  }
}

syncDatabase();
