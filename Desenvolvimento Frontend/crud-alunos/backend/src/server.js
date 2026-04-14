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

app.get('/alunos', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT id, nome, email, idade, curso, created_at FROM alunos ORDER BY id DESC'
    );
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar alunos:', error);
    res.status(500).json({ erro: 'Erro ao buscar alunos.' });
  }
});

app.get('/alunos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.execute(
      'SELECT id, nome, email, idade, curso, created_at FROM alunos WHERE id = ?',
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ erro: 'Aluno não encontrado.' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error('Erro ao buscar aluno:', error);
    res.status(500).json({ erro: 'Erro ao buscar aluno.' });
  }
});

app.post('/alunos', async (req, res) => {
  try {
    const { nome, email, idade, curso } = req.body;

    if (!nome || !email || !idade || !curso) {
      return res.status(400).json({ erro: 'Preencha todos os campos.' });
    }

    const [result] = await pool.execute(
      'INSERT INTO alunos (nome, email, idade, curso) VALUES (?, ?, ?, ?)',
      [nome, email, idade, curso]
    );

    res.status(201).json({
      mensagem: 'Aluno cadastrado com sucesso.',
      id: result.insertId
    });
  } catch (error) {
    console.error('Erro ao cadastrar aluno:', error);

    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ erro: 'E-mail já cadastrado.' });
    }

    res.status(500).json({ erro: 'Erro ao cadastrar aluno.' });
  }
});

app.put('/alunos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, idade, curso } = req.body;

    if (!nome || !email || !idade || !curso) {
      return res.status(400).json({ erro: 'Preencha todos os campos.' });
    }

    const [result] = await pool.execute(
      'UPDATE alunos SET nome = ?, email = ?, idade = ?, curso = ? WHERE id = ?',
      [nome, email, idade, curso, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: 'Aluno não encontrado.' });
    }

    res.json({ mensagem: 'Aluno atualizado com sucesso.' });
} catch (error) {
    console.error('Erro ao atualizar aluno:', error);

    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ erro: 'E-mail já cadastrado.' });
    }

    res.status(500).json({ erro: 'Erro ao atualizar aluno.' });
  }
});

app.delete('/alunos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.execute(
      'DELETE FROM alunos WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: 'Aluno não encontrado.' });
    }

    res.json({ mensagem: 'Aluno excluído com sucesso.' });
  } catch (error) {
    console.error('Erro ao excluir aluno:', error);
    res.status(500).json({ erro: 'Erro ao excluir aluno.' });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
