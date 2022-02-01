import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
mongoClient.connect(() => {
  db = mongoClient.db("cadastra-ai-v2");
});

const app = express();
app.use(express.json());

app.post("/sign-up", async (req, res) => {
  //name, email, password
  const user = req.body;

  // Insira o usuário no banco, criptografando a senha com bcrypt

  res.sendStatus(201);
});

app.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  // Busque o usuário no banco e valide a senha usando bcrypt

  if (true) {
    // Caso encontrado
    res.sendStatus(200);
  } else {
    // Caso não encontrado
    res.sendStatus(401);
  }
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000.');
});
