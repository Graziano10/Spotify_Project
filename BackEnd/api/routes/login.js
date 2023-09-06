// const express = require('express');
// const router = express.Router();
// const { Pool } = require('pg');
// const bcrypt = require('bcrypt');

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// // Rotta per il login dell'utente
// login.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Esegui una query per ottenere l'utente con l'email fornita
//     const query = {
//       text: 'SELECT * FROM utenti WHERE email = $1',
//       values: [email],
//     };
//     const result = await pool.query(query);

//     if (result.rows.length === 0) {
//       return res.status(401).json({ message: 'Email non registrata' });
//     }

//     const user = result.rows[0];

//     // Verifica la password dell'utente
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       return res.status(401).json({ message: 'Password errata' });
//     }

//     // Qui puoi generare un token di autenticazione e inviarlo come risposta

//     res.status(200).json({ message: 'Login avvenuto con successo', user });
//   } catch (error) {
//     console.error('Errore durante il login:', error);
//     res.status(500).json({ message: 'Errore durante il login' });
//   }
// });

// module.exports = login;


const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Importa la libreria jsonwebtoken

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Chiave segreta per firmare il token
const secretKey = process.env.JWT_SECRET_KEY;

// Rotta per il login dell'utente
login.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Esegui una query per ottenere l'utente con l'email fornita
    const query = {
      text: 'SELECT * FROM utenti WHERE email = $1',
      values: [email],
    };
    const result = await pool.query(query);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Email non registrata' });
    }

    const user = result.rows[0];

    // Verifica la password dell'utente
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Password errata' });
    }

    // Genera un token di autenticazione
    const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, {
      expiresIn: '1h', // Imposta la scadenza del token (1 ora)
    });

    // Invia il token come parte della risposta
    res.status(200).json({ message: 'Login avvenuto con successo', token });
  } catch (error) {
    console.error('Errore durante il login:', error);
    res.status(500).json({ message: 'Errore durante il login' });
  }
});

module.exports = login;