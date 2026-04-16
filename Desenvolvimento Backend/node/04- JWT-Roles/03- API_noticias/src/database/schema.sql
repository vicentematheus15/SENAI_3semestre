CREATE DATABASE portal_noticias;

CREATE TABLE usuarios (
  id         SERIAL PRIMARY KEY,
  nome       TEXT NOT NULL,
  email      TEXT UNIQUE NOT NULL,
  senha_hash  TEXT NOT NULL,
  perfil     TEXT NOT NULL DEFAULT 'leitor' -- 'leitor' ou 'admin'
);

CREATE TABLE noticias (
  id           SERIAL PRIMARY KEY,
  titulo       TEXT NOT NULL,
  conteudo     TEXT NOT NULL,
  criado_em    TIMESTAMP DEFAULT NOW()
);