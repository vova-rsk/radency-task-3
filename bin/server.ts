import { Pool } from 'pg';
import { MESSAGES } from '../helpers/constants';
import app from '../app';

const pool = new Pool({
  database: process.env.PG_DB,
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
})

const PORT = Number(process.env.PORT) || 3000;

pool.connect();
console.log(MESSAGES.DB_CONNECTION_SUCCESS);

app.listen(PORT, () => {
  console.log(`${MESSAGES.SERV_CONNECTION_SUCCESS} on port ${PORT}`)
});

export default pool;