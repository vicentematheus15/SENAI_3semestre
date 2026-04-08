-- 1. Crie o banco
CREATE DATABASE biblioteca;

-- 2. Conecte ao banco e execute o restante
CREATE TABLE livros (
id SERIAL PRIMARY KEY,
titulo TEXT NOT NULL,
autor TEXT NOT NULL,
ano INTEGER NOT NULL,
disponivel BOOLEAN DEFAULT TRUE
);

-- Popular a tabela com dados iniciais
INSERT INTO livros (titulo, autor, ano, disponivel) VALUES
('Dom Casmurro', 'Machado de Assis', 1899, TRUE),
('O Cortiço', 'Aluísio Azevedo', 1890, TRUE),
('Vidas Secas', 'Graciliano Ramos', 1938, FALSE),
('Grande Sertão: Veredas', 'João Guimarães Rosa', 1956, TRUE),
('A Hora da Estrela', 'Clarice Lispector', 1977, FALSE);