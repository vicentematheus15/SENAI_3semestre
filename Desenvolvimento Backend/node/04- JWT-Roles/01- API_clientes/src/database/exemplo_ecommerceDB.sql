-- 1. Crie o banco
CREATE DATABASE ecommerce;

-- 2. Conecte ao banco e execute

CREATE TABLE clientes (
  id         SERIAL PRIMARY KEY,
  nome       TEXT NOT NULL,
  email      TEXT UNIQUE NOT NULL,
  senha_hash  TEXT NOT NULL
);