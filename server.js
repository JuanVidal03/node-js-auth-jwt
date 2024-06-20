import express from "express";
const app = express();
const PORT = process.env.PORT ?? 8080;

import dotenv from "dotenv";
dotenv.config();

import { mongoDBConnection } from "./DB/mongoDB.js";
mongoDBConnection();


app.get('/', (req, res) => {
    res.send("Hola mundo");
});


app.post('/login', (req, res) => {});

app.post('/register', (req, res) => {});

app.post('/logout', (req, res) => {});

app.post('/protected', (req, res) => {});


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));