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


// -------------------------------------

// const express = require("express");
// const router = express.Router();
// const { Pool } = require("pg");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken"); // Importa la libreria jsonwebtoken

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// const secretKey = process.env.JWT_SECRET_KEY;

// // Funzione per l'hashing delle password
// const hashPassword = async (password) => {
//   const saltRounds = 10;
//   const hashedPassword = await bcrypt.hash(password, saltRounds);
//   return hashedPassword;
// };

// // Rotta per la registrazione di un nuovo utente e generazione del token JWT
// router.post("/register", async (req, res) => {
//   //const { first_name, last_name, email, password } = req.body;
//   const { first_name, email, password } = req.body;

//   try {
//     // Esegui l'hashing della password
//     const hashedPassword = await hashPassword(password);

//     // Esegui una query per inserire l'utente nella tabella degli utenti
//     const query = {
//       text: "INSERT INTO registration_users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
//       values: [`${first_name}`, email, hashedPassword],
//     };
//     const result = await pool.query(query);

//     // Genera un token JWT per l'utente registrato
//     const user = result.rows[0];
//     const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, {
//       expiresIn: "1h", // Scadenza del token (1 ora)
//     });

//     // Invia una risposta di conferma insieme al token JWT
//     res
//       .status(201)
//       .json({ message: "Registrazione avvenuta con successo", user, token });
//     console.log("Succes database");
//   } catch (error) {
//     console.error("Errore durante la registrazione:", error);
//     res.status(500).json({ message: "Errore durante la registrazione" });
//   }
// });

// module.exports = router;


// ------------------------------


// const express = require("express");
// const router = express.Router();
// const { Pool } = require("pg");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });


// const secretKey = process.env.JWT_SECRET_KEY;

// // Funzione per l'hashing delle password
// const hashPassword = async (password) => {
//   const saltRounds = 10;
//   const hashedPassword = await bcrypt.hash(password, saltRounds);
//   return hashedPassword;
// };


// // Rotta per la registrazione di un nuovo utente e generazione del token JWT
// router.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;
//   console.log("Inizio try");
//   try {
//     // Esegui l'hashing della password
//     const hashedPassword = await hashPassword(password);
//     console.log("Invio");
//     // Esegui una query per inserire l'utente nella tabella degli utenti
//     const query = {
//       text: "INSERT INTO registration_users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
//       values: [username, email, hashedPassword],
//     };
//     const result = await pool.query(query);
//     console.log("Invio databse");
//     // Genera un token JWT per l'utente registrato
//     const user = result.rows[0];
//     const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, {
//       expiresIn: "1h", // Scadenza del token (1 ora)
//     });

//     // Invia una risposta di conferma insieme al token JWT
//     res
//       .status(201)
//       .json({ message: "Registrazione avvenuta con successo", user, token });
//     console.log("Successo nel database");
//   } catch (error) {
//     console.error("Errore durante la registrazione:", error);
//     res.status(500).json({ message: "Errore durante la registrazione" });
//   }
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const { Pool } = require("pg");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// const secretKey = process.env.JWT_SECRET_KEY;

// // Funzione per l'hashing delle password
// const hashPassword = async (password) => {
//   const saltRounds = 10;
//   const hashedPassword = await bcrypt.hash(password, saltRounds);
//   return hashedPassword;
// };
// console.log('001')
// // Rotta per la registrazione di un nuovo utente e generazione del token JWT
// router.post("/register", async (req, res) => {
//   const { username, email, password } = req.body;
//   console.log('01')
 

//   const hashPassword = async (password) => {
//     const saltRounds = 10;
//     console.log('1.2');
//     try {
//       const hashedPassword = await bcrypt.hash(password, saltRounds);
//       console.log('1.3');
//       return hashedPassword;
//     } catch (error) {
//       console.error("Errore durante l'hashing della password:", error);
//       throw error; // Rilancia l'errore per essere catturato nella route
//     }
//   };
//   try {
//     // Esegui l'hashing della password
//     const hashedPassword = await hashPassword(password);

//     // Esegui la query di inserimento dell'utente
//     const query = {
//       text: "INSERT INTO registration_users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
//       values: [username, email, hashedPassword],
//     };
//     console.log('02')

//     const result = await pool.query(query);
//     console.log('03')
//     // Genera un token JWT per l'utente registrato
//     const user = result.rows[0];
//     const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, {
//       expiresIn: "1h", // Scadenza del token (1 ora)
//     });
//     console.log('04')
//     // Invia una risposta di conferma insieme al token JWT
//     res
//       .status(201)
//       .json({ message: "Registrazione avvenuta con successo", user, token });
//     console.log("Successo nel database");
//   } catch (error) {
//     console.error("Errore durante la registrazione:", error);
//     res.status(500).json({ message: "Errore durante la registrazione" });
//   }
//   console.log('05')
// });

// module.exports = router;

// ---------------------------------------

// const express = require("express");
// const router = express.Router();
// const { Pool } = require("pg");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");


// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });


// const secretKey = process.env.JWT_SECRET_KEY;

// Funzione per l'hashing delle password
// const hashPassword = async (password) => {
//   const saltRounds = 10;
//   const hashedPassword = await bcrypt.hash(password, saltRounds);
//   return hashedPassword;
// };

//console.log('001')

// Rotta per la registrazione di un nuovo utente e generazione del token JWT
// router.post("/register", async (req, res) => {
//   const { username, email, password } = req.body;
//   console.log('01')

//   try {
    // Esegui l'hashing della password utilizzando la funzione hashPassword definita all'inizio del file
    //const hashedPassword = await hashPassword(password);
    // console.log('02')

    // Esegui la query di inserimento dell'utente
    // const query = {
    //   text: "INSERT INTO registration_users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
    //   values: [username, email, hashedPassword],
    // };

    // const result = await pool.query(query);
    // console.log('03')

    // Genera un token JWT per l'utente registrato
    // const user = result.rows[0];
    // const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, {
    //   expiresIn: "1h", // Scadenza del token (1 ora)
    // });
    //console.log('04')

    // Invia una risposta di conferma insieme al token JWT
//     res
//       .status(201)
//       .json({ message: "Registrazione avvenuta con successo", user, token });
//     console.log("Successo nel database");
//   } catch (error) {
//     console.error("Errore durante la registrazione:", error);
//     res.status(500).json({ message: "Errore durante la registrazione" });
//   }
//   console.log('05')
// });

//module.exports = router;


// -----------------------------------


// const express = require('express');
// const router = express.Router();
// const { Pool } = require('pg');

// // Sostituisci DATABASE_URL con la tua URL di connessione al database PostgreSQL
// const pool = new Pool({
//   //connectionString: 'DATABASE_URL_HERE',
//   connectionString: 'postgresql://postgres:postgres1234@localhost:5432/SpotyProject',
// });

// // Definisci la route per la registrazione degli utenti
// router.post('/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     console.log('Dati ricevuti:', { name, email, password });
//     console.log('01');

//     // Esegui la query di inserimento
//     const query = `
//       INSERT INTO public.registration_users (name, email, password)
//       VALUES (name, email, password)
//       RETURNING *`;

//     const { rows } = await pool.query(query, [name, email, password]);
//     console.log('02');

//     // Restituisci l'ID dell'utente appena registrato
//     const newUserId = rows[0].id;
//     console.log('03');

//     res.status(201).json({ message: 'Utente registrato con successo', userId: newUserId });
//   } catch (error) {
//     console.error('Errore durante la registrazione:', error);
//     res.status(500).json({ error: 'Si è verificato un errore durante la registrazione', details: error.message });
//   }
//   console.log('04');
// });

// module.exports = router;



// -------------------------
// -------------------------
// -------------------------

