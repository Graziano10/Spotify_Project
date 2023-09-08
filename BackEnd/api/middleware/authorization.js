//  const jwt = require("jsonwebtoken");

// //config stand for access to the environment variables
// require("dotenv").config(); 

// token : 'e5a4cd2ef48aeaabb06be5e8906e546d72404494ef8945cbec6274d1c037da62';


// module.exports = async(req, res, next) => {
//     try {
//         const jwtToken = req.header("token");

//         if (!jwtToken) {
//           return res.status(403).json("Not Authorize");
//         }

//         const payload = jwt.verify(jwtToken, process.env.jwtSecret);

//         req.user = payload.user;

//         next();

//     } catch (err) {
//         console.error(err.message);
//         return res.status(403).json("Not Authorize");
//     }
// }


const jwt = require("jsonwebtoken");

// Config per accedere alle variabili d'ambiente
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).json("Non autorizzato");
    }

    const payload = jwt.verify(jwtToken, jwtSecret);

    req.user = payload.user;

    next();
  } catch (err) {
    console.error(err.message);
    return res.status(403).json("Non autorizzato");
  }
};