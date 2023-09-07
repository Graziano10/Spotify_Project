const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const registerRouter = require("./routes/register"); // Importa il modulo delle rotte degli utenti
const loginRouter = require("./routes/login");

// DATABASE
require("dotenv").config();
const db = require("./db/db.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// PAGE FRIST
app.get("/", (_, res) => {
  res.status(201).send("Good");
});

// REGISTER
app.use("/api/register", registerRouter, (_, res) => {
  res.status(201).send("Register");
});

// LOGIN
app.use("/api/login", loginRouter);

app.listen(3000, () => {
  console.log("Server up and running on http://localhost:3000... ");
});
