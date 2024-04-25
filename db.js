const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_PASS,
  password: process.env.DB_NAME,
  port: process.env.PORT,
});


// Função para testar a conexão e executar uma query
async function fetchData() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log(res.rows[0]);
  } catch (err) {
    console.error(err);
  }
}

fetchData();
