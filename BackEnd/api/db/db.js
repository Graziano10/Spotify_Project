const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
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