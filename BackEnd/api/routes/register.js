// const express = require('express');
// const router = express.Router();
// const { Pool } = require('pg');
// const bcrypt = require('bcrypt');

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });



// // Funzione per l'hashing delle password
// const hashPassword = async (password) => {
//   const saltRounds = 10;
//   const hashedPassword = await bcrypt.hash(password, saltRounds);
//   return hashedPassword;
// }

// // Rotta per la registrazione di un nuovo utente
// register.post('/registrazione', async (req, res) => {
//   const { first_name, last_name, email, password } = req.body;

//   try {
//     // Esegui l'hashing della password
//     const hashedPassword = await hashPassword(password);

//     // Esegui una query per inserire l'utente nella tabella degli utenti
//     const query = {
//       text:
//         'INSERT INTO utenti (name, email, password) VALUES ($1, $2, $3) RETURNING *',
//       values: [`${first_name} ${last_name}`, email, hashedPassword],
//     };
//     const result = await pool.query(query);

//     // Invia una risposta di conferma
//     res.status(201).json({ message: 'Registrazione avvenuta con successo', user: result.rows[0] });
//   } catch (error) {
//     console.error('Errore durante la registrazione:', error);
//     res.status(500).json({ message: 'Errore durante la registrazione' });
//   }
// });

// module.exports = register;


const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Importa la libreria jsonwebtoken

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


const secretKey = process.env.JWT_SECRET_KEY;

// Funzione per l'hashing delle password
const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

// Rotta per la registrazione di un nuovo utente e generazione del token JWT
router.post('/registrazione', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    // Esegui l'hashing della password
    const hashedPassword = await hashPassword(password);

    // Esegui una query per inserire l'utente nella tabella degli utenti
    const query = {
      text:
        'INSERT INTO utenti (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      values: [`${first_name} ${last_name}`, email, hashedPassword],
    };
    const result = await pool.query(query);

    // Genera un token JWT per l'utente registrato
    const user = result.rows[0];
    const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, {
      expiresIn: '1h', // Scadenza del token (1 ora)
    });

    // Invia una risposta di conferma insieme al token JWT
    res.status(201).json({ message: 'Registrazione avvenuta con successo', user, token });
  } catch (error) {
    console.error('Errore durante la registrazione:', error);
    res.status(500).json({ message: 'Errore durante la registrazione' });
  }
});

module.exports = router;