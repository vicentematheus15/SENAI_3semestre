import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => { 
res.json({ mensagem: 'API de alunos funcionando!' }); 
});
