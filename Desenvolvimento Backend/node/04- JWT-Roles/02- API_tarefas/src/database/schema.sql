CREATE DATABASE tarefas_app;

-- Tabela de usuários
CREATE TABLE usuarios (
  id        SERIAL PRIMARY KEY,
  nome      TEXT NOT NULL,
  email     TEXT UNIQUE NOT NULL,
  senha_hash TEXT NOT NULL
);

-- Tabela de tarefas vinculada ao usuário
CREATE TABLE tarefas (
  id         SERIAL PRIMARY KEY,
  descricao  TEXT NOT NULL,
  concluida  BOOLEAN DEFAULT FALSE,
  usuario_id  INTEGER REFERENCES usuarios(id) ON DELETE CASCADE
);