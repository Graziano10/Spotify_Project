const router = require("express").Router();
const pool = require("../db/db");
const authorization = require("../middleware/authorization");

/**
 * Dashboard Route
 */

router.get("/", authorization, async (req,res) => {

  try {
    const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1", [req.user]);

    res.json(user.rows[0]); // give only user name

} catch (err) {
     console.error(err.message);
     res.status (500).json("Server Error");
   }
});

module.exports = router;