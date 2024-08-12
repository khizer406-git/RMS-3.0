import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  connectionString: process.env.POSTGRES_URL,
  port: 5432,
});

export const query = <T>(text: string, params: T[]) => pool.query(text, params);
