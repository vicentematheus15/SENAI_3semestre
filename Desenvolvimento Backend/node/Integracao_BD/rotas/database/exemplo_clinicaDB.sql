-- id, nome, telefone, email
CREATE TABLE contatos(
	id SERIAL PRIMARY KEY,
	nome VARCHAR (100) NOT NULL,
	telefone VARCHAR(11),
	email VARCHAR(55) NOT NULL UNIQUE
);

--população teste
INSERT INTO contatos (nome, telefone, email) VALUES
('Ana Silva', '11987654321', 'ana.silva@email.com'),
('Bruno Oliveira', '21976543210', 'bruno.o@provider.net'),
('Carla Souza', '31965432109', 'carla_souza@webmail.com'),
('Diego Santos', '41954321098', 'diego.santos@empresa.com.br'),
('Elena Martins', '51943210987', 'elena.m@xyz.org'),
('Fabio Lima', '61932109876', 'fabio.lima@fastmail.com'),
('Gisele Costa', '71921098765', 'gisele_costa@uol.com.br'),
('Hugo Ferreira', '81910987654', 'hugo.f@gmail.com'),
('Iara Rocha', '91909876543', 'iara.rocha@outlook.com'),
('João Pereira', '11998877665', 'joao.p@terra.com.br'),
('Karina Alves', '21988776655', 'karina_alves@icloud.com'),
('Lucas Mendes', '31977665544', 'lucas.mendes@uol.com'),
('Mariana Dias', '41966554433', 'mari.dias@bol.com.br'),
('Nilson Junior', '51955443322', 'nilson.jr@live.com'),
('Olivia Castro', '61944332211', 'olivia.castro@protonmail.com'),
('Paulo Ribeiro', '71933221100', 'paulo_rib@yahoo.com'),
('Quintino Gomes', '81922110099', 'quintino.g@ig.com.br'),
('Renata Farias', '91911009988', 'renata.f@gmail.com'),
('Sérgio Murilo', '11922334455', 'sergio.m@outlook.com'),
('Tatiana Neves', '21933445566', 'tati_neves@empresa.pt'),
('Uriel Ramos', '31944556677', 'uriel.ramos@mail.com'),
('Vanessa Luz', '41955667788', 'vane.luz@servico.com'),
('Wagner Antunes', '51966778899', 'wagner.a@tech.io'),
('Xavier Filho', '61977889900', 'xavier.f@edu.br'),
('Yara Meireles', '71988990011', 'yara_m@vendas.com'),
('Zeca Camargo', '81999001122', 'zeca.c@portal.net'),
('Beatriz Nunes', '91911223344', 'beatriz.n@freelance.com'),
('Caio Jardim', '11922334466', 'caio.jardim@estudo.org'),
('Dora Viana', '21933445577', 'dora.viana@web.com'),
('Erick Porto', '31944556688', 'erick.porto@cloud.com');