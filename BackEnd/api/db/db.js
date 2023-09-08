const Pool = require("pg").Pool;

require("dotenv").config(); 

const pool = new Pool({
  user: 'postgres',
  password: 'postgres1234',
  host: 'localhost',
  port: 5432,
  database: 'SpotyProject',
});

pool.on('error', (err) => {
  console.error('Errore nella connessione al database:', err);
});

// Test di connessione al database quando il pool è stato creato
pool.connect((err, _, done) => {
    if (err) {
      console.error('Errore nella connessione al database:', err);
    } else {
      console.log('Connessione al database PostgreSQL riuscita');
      done(); // Rilascia la connessione
    }
  });

module.exports = pool;
