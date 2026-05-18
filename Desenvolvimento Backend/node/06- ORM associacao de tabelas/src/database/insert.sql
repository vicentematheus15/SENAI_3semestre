-- POPULAR TURMAS
INSERT INTO turmas ("nome", "semestre", "curso", "createdAt", "updatedAt")
VALUES
('DSM 1A', 1, 'Desenvolvimento de Software Multiplataforma', NOW(), NOW()),
('DSM 2A', 2, 'Desenvolvimento de Software Multiplataforma', NOW(), NOW()),
('DSM 3A', 3, 'Desenvolvimento de Software Multiplataforma', NOW(), NOW()),
('DSM 4A', 4, 'Desenvolvimento de Software Multiplataforma', NOW(), NOW()),
('EDM 1A', 1, 'Engenharia de Dados e Machine Learning', NOW(), NOW()),
('EDM 3A', 3, 'Engenharia de Dados e Machine Learning', NOW(), NOW()),
('ADS 2A', 2, 'Análise e Desenvolvimento de Sistemas', NOW(), NOW()),
('SI 5A', 5, 'Sistemas de Informação', NOW(), NOW());

-- POPULAR ALUNOS
INSERT INTO alunos
("nome", "email", "senha", "mediaGeral", "turmaId", "createdAt", "updatedAt")
VALUES

-- TURMA 1
('Ana Silva', 'ana1@email.com', '123', 5.2, 1, NOW(), NOW()),
('Bruno Costa', 'bruno1@email.com', '123', 7.5, 1, NOW(), NOW()),
('Carlos Lima', 'carlos1@email.com', '123', 4.8, 1, NOW(), NOW()),
('Daniela Rocha', 'daniela1@email.com', '123', 8.0, 1, NOW(), NOW()),

-- TURMA 2
('Eduardo Martins', 'edu1@email.com', '123', 5.9, 2, NOW(), NOW()),
('Fernanda Alves', 'fernanda1@email.com', '123', 9.1, 2, NOW(), NOW()),
('Gabriel Souza', 'gabriel1@email.com', '123', 3.7, 2, NOW(), NOW()),
('Helena Moraes', 'helena1@email.com', '123', 6.4, 2, NOW(), NOW()),

-- TURMA 3
('Igor Mendes', 'igor1@email.com', '123', 7.2, 3, NOW(), NOW()),
('Juliana Freitas', 'juliana1@email.com', '123', 2.9, 3, NOW(), NOW()),
('Kaique Ramos', 'kaique1@email.com', '123', 6.8, 3, NOW(), NOW()),
('Larissa Pinto', 'larissa1@email.com', '123', 5.4, 3, NOW(), NOW()),

-- TURMA 4
('Marcelo Dias', 'marcelo1@email.com', '123', 8.5, 4, NOW(), NOW()),
('Natália Gomes', 'natalia1@email.com', '123', 4.2, 4, NOW(), NOW()),
('Otávio Cardoso', 'otavio1@email.com', '123', 6.0, 4, NOW(), NOW()),

-- TURMA 5
('Patrícia Nunes', 'patricia1@email.com', '123', 5.1, 5, NOW(), NOW()),
('Rafael Teixeira', 'rafael1@email.com', '123', 7.9, 5, NOW(), NOW()),
('Sara Oliveira', 'sara1@email.com', '123', 3.5, 5, NOW(), NOW()),

-- TURMA 6
('Tiago Ferreira', 'tiago1@email.com', '123', 8.7, 6, NOW(), NOW()),
('Ursula Batista', 'ursula1@email.com', '123', 5.6, 6, NOW(), NOW()),
('Vinicius Melo', 'vinicius1@email.com', '123', 9.4, 6, NOW(), NOW()),

-- TURMA 7
('William Cruz', 'william1@email.com', '123', 6.1, 7, NOW(), NOW()),
('Xênia Duarte', 'xenia1@email.com', '123', 4.7, 7, NOW(), NOW()),
('Yasmin Lopes', 'yasmin1@email.com', '123', 7.3, 7, NOW(), NOW()),

-- TURMA 8
('Zeca Fernandes', 'zeca1@email.com', '123', 5.0, 8, NOW(), NOW()),
('Amanda Reis', 'amanda1@email.com', '123', 8.8, 8, NOW(), NOW()),

-- SEM TURMA
('Beatriz SemTurma', 'beatriznull@email.com', '123', 6.5, NULL, NOW(), NOW()),
('Caio SemTurma', 'caionull@email.com', '123', 4.3, NULL, NOW(), NOW()),
('Diego SemTurma', 'diegonull@email.com', '123', 7.0, NULL, NOW(), NOW());