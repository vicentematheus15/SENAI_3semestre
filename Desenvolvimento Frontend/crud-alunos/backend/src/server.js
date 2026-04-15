import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ mensagem: 'API de alunos funcionando!' });
});
// LISTAR 
app.get('/alunos', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT id, nome, email, idade, curso, created_at FROM alunos ORDER BY id DESC');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar alunos.' });
    }
});
// BUSCAR POR ID
app.get('/alunos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            'SELECT * FROM alunos WHERE id = $1',
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ erro: 'Aluno não encontrado.' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar aluno.' });
    }
});
// CRIAR 
app.post('/alunos', async (req, res) => {
    try {
        const { nome, email, idade, curso } = req.body;
        if (!nome || !email || !idade || !curso) {
            return res.status(400).json({ erro: 'Preencha todos os campos.' });
        }
        const result = await pool.query(
            'INSERT INTO alunos (nome, email, idade, curso) VALUES ($1, $2, $3, $4) RETURNING id',
            [nome, email, idade, curso]
        );
        res.status(201).json({
            mensagem: 'Aluno cadastrado com sucesso.',
            id: result.rows[0].id
        });
    } catch (error) {
        console.error(error);
        if (error.code === '23505') {
            return res.status(400).json({ erro: 'E-mail já cadastrado.' });
        }
        res.status(500).json({ erro: 'Erro ao cadastrar aluno.' });
    }
});
// ATUALIZAR 
app.put('/alunos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, idade, curso } = req.body;
        const result = await pool.query(
            'UPDATE alunos SET nome=$1, email=$2, idade=$3, curso=$4 WHERE id=$5', [nome, email, idade, curso, id]
        );
        if (result.rowCount === 0) {
            return res.status(404).json({ erro: 'Aluno não encontrado.' });
        }
        res.json({ mensagem: 'Aluno atualizado com sucesso.' });
    } catch (error) {
        console.error(error);
        if (error.code === '23505') {
            return res.status(400).json({ erro: 'E-mail já cadastrado.' });
        }
        res.status(500).json({ erro: 'Erro ao atualizar aluno.' });
    }
});
// EXCLUIR 
app.delete('/alunos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            'DELETE FROM alunos WHERE id = $1',
            [id]
        );
        if (result.rowCount === 0) {
            return res.status(404).json({ erro: 'Aluno não encontrado.' });
        }
        res.json({ mensagem: 'Aluno excluído com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao excluir aluno.' });
    }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 
