const express = require("express");        
const app = express();

const cors = require("cors");

//middleware
app.use(express.json()); //req.body
app.use(cors());

// register and login routes

app.use("/auth", require("./routes/jwtAuth"));

//dashboard route

app.use("/dashboard", require("./routes/dashboard"));

app.listen(3000, () => {
  console.log("Server up and running on http://localhost:3000... ");
});