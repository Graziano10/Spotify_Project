// const jwt = require('jsonwebtoken');

// // Leggi la chiave segreta dalla variabile d'ambiente
// const secretKey = process.env.JWT_SECRET_KEY;

// // Funzione per generare un token per l'utente autenticato
// function generateToken(user) {
//   // Genera un token con i dati dell'utente e una scadenza
//   const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
//   return token;
// }

// // Funzione per verificare un token
// function verifyToken(token) {
//   try {
//     // Verifica il token utilizzando la chiave segreta e restituisce i dati decodificati
//     const decoded = jwt.verify(token, secretKey);
//     return decoded;
//   } catch (error) {
//     // In caso di errore nella verifica del token, restituisci null
//     return null;
//   }
// }

// module.exports = {
//   generateToken,
//   verifyToken,
// };