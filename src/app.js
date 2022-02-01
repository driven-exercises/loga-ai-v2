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

  const passwordHash = bcrypt.hashSync(password, 10);

  await db.collection('users').insertOne({ ...user, password: passwordHash })

  res.sendStatus(201);
});

app.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  const user = await db.collection('users').findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    // Crie uma sessão na coleção de sessões para o usuário e retorne um token para o front-end
  } else {
    res.sendStatus(401);
  }
});

app.get("/meus-dados", async (req, res) => {
  // Receba um token pelo header Authorization
  // Retorne o usuário logado (objeto contendo id, nome e email)
  // Caso não seja enviado o token ou não encontrado, retorne status 401
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000.');
});
