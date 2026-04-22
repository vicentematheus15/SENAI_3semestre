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

{
  "nome": "Vicente",
  "email": "vicente@email.com",
  "senha": "123"
}

{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6IlZpY2VudGUiLCJpYXQiOjE3NzY4OTEzMTMsImV4cCI6MTc3Njg5ODUxM30.XuLvbIUv-wj-_gJHD_MmPHdW57jrWz8gV2NO-Hy6M9I","usuario":{"id":1,"nome":"Vicente","email":"vicente@email.com"}}

{
  "nome": "Ana",
  "email": "ana@email.com",
  "senha": "123"
}

{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwibm9tZSI6IkFuYSIsImlhdCI6MTc3Njg5MDM2MCwiZXhwIjoxNzc2ODk3NTYwfQ.f5xyOyxepMRM8zCCanW0xMU1cOvmCfNcx1__9qPfycY","usuario":{"id":2,"nome":"Ana","email":"ana@email.com"}}