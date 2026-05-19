# 📚 SENAI — Repositório do 3º Semestre

> Portfólio acadêmico desenvolvido ao longo do 3º semestre do curso de **Desenvolvimento de Software Multiplataforma (DSM)** no SENAI. O repositório reúne exercícios progressivos, projetos de integração e aplicações completas cobrindo Backend, Frontend e Testes de Sistemas.

---

## 📋 Sobre o Repositório

Este repositório documenta a evolução técnica de um semestre inteiro de desenvolvimento de software, organizado em três grandes eixos:

- **Desenvolvimento Backend** — Fundamentos de Node.js, Express, integração com banco de dados PostgreSQL, ORM com Sequelize, autenticação JWT e construção de APIs RESTful seguras.
- **Desenvolvimento Frontend** — Aplicações React com TypeScript, gerenciamento de estado com `useState`, consumo de APIs REST e navegação com React Router.
- **Teste de Sistemas** — Testes unitários com Vitest seguindo os padrões AAA (Arrange, Act, Assert), Test-Driven Development (TDD) e Behavior-Driven Development (BDD) com Gherkin.

O projeto integrador, ponto alto do semestre, une todos esses conceitos em uma API REST completa com autenticação JWT, bcrypt, Sequelize ORM, rate limiting, CORS e Helmet.

---

## 🛠️ Tecnologias Utilizadas

### Backend
| Tecnologia | Uso Real no Código |
|---|---|
| **Node.js** (ES Modules) | Base runtime; todos os projetos usam `import/export` via `"type": "module"` |
| **Express 5** | Criação de rotas, middlewares e servidor HTTP |
| **PostgreSQL** | Banco de dados relacional; queries brutas (`pg.Pool`) e via ORM |
| **Sequelize 6** | ORM com `define()`, `sync({ alter: true })`, associações `hasMany` / `belongsTo` |
| **JWT (`jsonwebtoken`)** | Geração e verificação de tokens de autenticação (`jwt.sign`, `jwt.verify`) |
| **bcryptjs** | Hash de senhas com `bcrypt.hash(senha, 10)` e comparação com `bcrypt.compare` |
| **Helmet** | Segurança HTTP: `frameguard`, `hidePoweredBy`, `noSniff`, `hsts`, `referrerPolicy` |
| **express-rate-limit** | Rate limiting por rota e global (100 req/15min globalmente, 50 em rotas privadas) |
| **CORS** | Configuração centralizada de origens, métodos e headers permitidos |
| **dotenv** | Variáveis de ambiente para credenciais e configurações sensíveis |

### Frontend
| Tecnologia | Uso Real no Código |
|---|---|
| **React 18** | Componentes funcionais, hooks (`useState`, `useEffect`) |
| **TypeScript** | Tipagem explícita em `useState<string>`, `useState<number \| null>`, props tipadas |
| **React Router DOM** | Navegação SPA com `<Routes>`, `<Route>`, `<NavLink>`, `useNavigate` |
| **Vite** | Build tool e dev server para projetos React |
| **Fetch API** | Consumo de APIs REST com `fetch()` (GET, POST, PUT, DELETE) |

### Testes
| Tecnologia | Uso Real no Código |
|---|---|
| **Vitest** | Framework de testes unitários com `describe`, `it/test`, `expect` |
| **Mocking (vi.fn / vi.spyOn)** | Mocks de serviços externos (`emailService`) e spies em `logger.log` |
| **BDD / Gherkin** | User Stories e cenários Given/When/Then documentados |

---

## 📁 Estrutura do Repositório

```
SENAI_3semestre-main/
├── Desenvolvimento Backend/
│   ├── Revisao inicial/          # POO, estruturas de dados, funções
│   ├── node/
│   │   ├── 01- Modularizacao/    # Módulos Node.js, fs, os, path
│   │   ├── 02- API-Express/      # CRUDs em memória com arquitetura MVC
│   │   ├── 03- Integracao_BD/    # APIs com PostgreSQL via pg.Pool
│   │   ├── 04- JWT-Roles/        # Autenticação JWT + bcrypt
│   │   ├── 05- ORM/              # Sequelize básico
│   │   └── 06- ORM associacao/   # Relacionamentos hasMany/belongsTo
│   └── Projeto integrador/       # API completa com segurança de produção
│
├── Desenvolvimento Frontend/
│   ├── exercicios/               # Calculadoras de salário e média ponderada
│   ├── App calcular media/       # App React com validação de entrada
│   ├── App map_filter_find_reduce/ # Funções de array em JS puro e React
│   ├── react-menu-ts-app/        # SPA com React Router + TypeScript
│   └── crud-alunos/              # Aplicação fullstack (backend + frontend)
│
└── Teste de Sistemas/
    ├── Exercicio teste unitario/  # Testes unitários com padrão AAA
    ├── TDD/                       # Ciclo Red-Green-Refactor
    ├── 04-advanced-project/       # Mocks, spies e testes assíncronos
    └── 05-bdd-project/            # BDD com Gherkin e AuthService
```

---

## 🚀 Projetos e Exercícios Desenvolvidos

---

### 1. 🎓 Revisão de POO — Fundamentos de Orientação a Objetos

**Objetivo:** Consolidar os pilares da Programação Orientada a Objetos em JavaScript antes de iniciar o desenvolvimento backend.

**O que foi implementado:**

- **Encapsulamento real** com campos privados usando a sintaxe `#` do ES2022. No arquivo `encapsulamento.js`, a classe `ContaBancaria` expõe apenas um getter para `saldo`, impedindo acesso direto ao atributo `#saldoConta`.
- **Herança** com `extends` e `super()`: a classe `Gerentes extends Funcionario` reutiliza o construtor base e adiciona atributos e métodos próprios como `aprovarFerias()`.
- **Polimorfismo**: ambas as classes `Funcionario` e `Gerentes` possuem o método `exibirCargo()`, mas com comportamentos distintos. A chamada retorna a string correta conforme o tipo real do objeto.

**Exercícios de classe (12 exercícios):**

- `01.js` — Classe `Livro` com método `descrever()` retornando string formatada; três instâncias criadas.
- `05.js` — Classe `Usuario` com campo privado `#idade`, getter e setter com validação (rejeita valores ≤ 0, ≥ 120 ou não numéricos com `throw new Error`).
- `10.js` — Polimorfismo completo: `Notificacao` (base), `Email`, `SMS` e `PushNotification` cada uma sobrescrevendo `enviar()` com mensagem específica.

**Conceitos consolidados:** campos privados (`#`), `extends`, `super()`, getters/setters, `throw new Error`, polimorfismo por sobrescrita de método.

---

### 2. 📦 Modularização com Node.js — Core Modules (fs, os, path)

**Objetivo:** Aprender a trabalhar com o sistema de arquivos, informações do sistema operacional e manipulação de caminhos usando os módulos nativos do Node.js.

**Exercícios implementados (10 exercícios + desafio final):**

- **ex01** — Leitor de logs: lê `log.txt` com `fs/promises`, conta linhas e exibe total. Separado em dois módulos (`contador.js` importado por `main.js`), demonstrando separação de responsabilidades.
- **ex05** — Normalizador de caminhos: usa `readdir` para listar arquivos de um diretório, então aplica `path.basename()`, `path.resolve()` e `path.join()` para exibir nome, caminho absoluto e caminho de backup de cada arquivo.
- **Lista 2** — Mesmos exercícios refeitos usando ES Modules com `import/export` explícito, reforçando a diferença em relação ao CommonJS (`require`).

**Calculadora modularizada (introdução):** `calculadora.js` exporta as funções `somar()`, `subtrair()` e a constante `pi`; `main.js` as importa e utiliza — primeiro exemplo de separação entre módulo de lógica e módulo de execução.

---

### 3. 🌐 APIs REST com Express — Arquitetura MVC em memória

**Objetivo:** Construir APIs RESTful com Express seguindo a arquitetura MVC, usando arrays em memória como banco de dados simulado.

**Projetos implementados:**

#### CRUD de Frutas, Alunos, Produtos, Contatos e Tarefas (01 ao 05)
Cinco CRUDs progressivos com a mesma estrutura MVC:
- `server.js` ou `app.js` — inicializa o Express e registra as rotas
- `controller/` — recebe a requisição, chama o model e devolve a resposta com status HTTP correto (200, 201, 404)
- `model/` — contém o array `exemploDB.js` e as funções de acesso (`listar`, `buscar`, `criar`, `atualizar`, `remover`)

**Exemplo real do controlador de frutas:**
```js
// controller chama o model e decide o status HTTP
export function mostrarFruta(req, res){
    const {id} = req.params;
    const fruta = model.mostrarFrutaDB(id);
    if(!fruta) return res.status(404).json({mensagem: "Fruta não encontrada!"});
    return res.status(200).json(fruta);
}
```

#### Demonstração de params e query strings
O projeto `paramsQuery/server.js` demonstra os três tipos de extração de dados de uma requisição:
- `req.query` — parâmetros de URL (`?id=1&nome=produto`)
- `req.body` — corpo JSON da requisição (POST/PUT)
- `req.params` — parâmetros de rota (`/usuarios/:id`)

#### CRUD Clínica (projeto mais completo dessa etapa)
API com três entidades relacionadas (`pacientes`, `medicos`, `consultas`), cada uma com seu próprio controller, model e arquivo de rotas, organizados em `src/controllers/`, `src/models/` e `src/routes/`. O `app.js` registra os três grupos de rotas: `/pacientes`, `/medicos` e `/consultas`.

---

### 4. 🗄️ Integração com Banco de Dados — PostgreSQL via `pg`

**Objetivo:** Conectar as APIs ao PostgreSQL real usando o driver `pg` com pool de conexões.

**Exemplo de conexão (padrão em todos os projetos):**
```js
import pg from 'pg';
import 'dotenv/config';
const { Pool } = pg;
const pool = new Pool({
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB
});
export default pool;
```

**Três APIs com banco de dados real:**

- **API de Estoque** — CRUD de produtos com tabela `produtos`; script SQL `exemplo_estoqueDB.sql` para criação do schema.
- **API de Livros** — CRUD de livros com tabela `livros`; banco `biblioteca`.
- **API de Usuários** — CRUD de usuários com **JWT já integrado**. O middleware `autenticarJWT` extrai o token do header `Authorization`, chama `jwt.verify()` e injeta os dados decodificados em `req.usuario`. Rotas privadas passam pelo middleware antes do controller.

Os modelos usam `pool.query()` com **queries parametrizadas** (`$1, $2`) em todas as operações, prevenindo SQL Injection por padrão.

---

### 5. 🔐 Autenticação JWT com Roles — APIs com controle de acesso

**Objetivo:** Implementar autenticação completa com JWT e bcrypt, criando rotas públicas e privadas.

**Três APIs com JWT:**

#### API de Clientes (e-commerce)
- Login gera token com `jwt.sign({ id, nome }, secret, { expiresIn })`
- Middleware valida `Authorization: Bearer <token>`, faz `split(' ')[1]`, chama `jwt.verify()` e injeta payload em `req.usuario`
- Rotas privadas protegidas com o middleware antes do controller

#### API de Tarefas (relação usuário → tarefa)
Schema SQL com duas tabelas relacionadas:
```sql
CREATE TABLE tarefas (
  id         SERIAL PRIMARY KEY,
  descricao  TEXT NOT NULL,
  concluida  BOOLEAN DEFAULT FALSE,
  usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE
);
```
Cada tarefa pertence a um usuário; o token JWT garante que o usuário só acessa suas próprias tarefas.

#### API de Notícias (com roles)
Schema com campo `perfil TEXT NOT NULL DEFAULT 'leitor'` na tabela de usuários. Dois tipos: `leitor` (só lê) e `admin` (pode criar/deletar notícias). O middleware valida o perfil do usuário decodificado no token antes de permitir ações administrativas.

---

### 6. 🗂️ ORM com Sequelize — Mapeamento objeto-relacional

**Objetivo:** Substituir queries SQL manuais pelo Sequelize, aprendendo a definir modelos, sincronizar schema e realizar consultas com métodos de alto nível.

**Modelo Sequelize (`User`):**
```js
export const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    senha: { type: DataTypes.STRING, allowNull: false }
}, { tableName: 'usuarios', timestamps: true });
```

**Controller com Sequelize (CRUD completo):**
- `User.findAll()` — lista todos
- `User.findByPk(id)` — busca por chave primária
- `User.create({...})` — insere novo registro
- `user.update(req.body)` — atualiza instância
- `user.destroy()` — remove instância

**Remoção da senha da resposta:**
```js
const userResponse = createdUser.toJSON();
delete userResponse.senha; // nunca expõe o hash para o cliente
```

---

### 7. 🔗 ORM com Associações — Relacionamentos hasMany / belongsTo

**Objetivo:** Mapear relacionamentos entre tabelas usando as associações do Sequelize.

**Modelos e associação:**
```js
// models/index.js
Turma.hasMany(Aluno, { foreignKey: 'turmaId' }); // uma turma tem vários alunos
Aluno.belongsTo(Turma, { foreignKey: 'turmaId' }); // aluno pertence a uma turma
// O Sequelize cria automaticamente a coluna turmaId na tabela alunos
```

**Queries avançadas com Sequelize Operators (`Op`):**

No controller `aluno.controller.js`, queries complexas usando operadores Sequelize:
```js
// Alunos com média abaixo de 7 nos semestres 1 ou 2, ordenados por média ASC
const alunosEmRisco = await Aluno.findAll({
    attributes: ['nome', 'email', 'mediaGeral'],
    where: { mediaGeral: { [Op.lt]: 7.0 } },
    include: {
        model: Turma,
        attributes: ['nome'],
        where: { [Op.or]: [{ semestre: 1 }, { semestre: 2 }] }
    },
    order: [['mediaGeral', 'ASC']]
});
```

```js
// Alunos sem turma (orfãos) e alunos em turmas específicas
const orfaos = await Aluno.findAll({ where: { turmaId: { [Op.is]: null } } });
const outrasTurmas = await Aluno.findAll({
    where: { [Op.and]: [
        { turmaId: { [Op.notIn]: [1, 3, 5] } },
        { turmaId: { [Op.ne]: null } }
    ]}
});
```

---

### 8. 🏆 Projeto Integrador — API REST com Segurança de Produção

**Objetivo:** Construir uma API completa integrando todos os conceitos do semestre, com foco em segurança, organização e boas práticas.

**Tecnologias:** Express 5, Sequelize 6 + PostgreSQL, JWT, bcryptjs, Helmet, CORS, express-rate-limit, dotenv.

**Arquitetura:**
```
app.js
├── src/config/       cors.js | helmet.js | rateLimit.js
├── src/middlewares/  auth.middleware.js
├── src/models/       user.model.js | class.model.js | student.model.js
├── src/controllers/  auth.controller.js | user.controller.js | student.controller.js | class.controller.js
├── src/routes/       auth.routes.js | user.routes.js | student.routes.js | class.routes.js
└── src/database/     database.js | insert_teste.sql
```

**Funcionalidades implementadas:**

**Autenticação (`/auth`):**
- `POST /auth/cadastro` — valida campos, verifica email duplicado com `Usuario.findOne({ where: { email } })`, faz hash da senha com `bcrypt.hash(senha, 10)`, persiste no banco, retorna `id`, `nome`, `email` e `createdAt` (sem expor a senha).
- `POST /auth/login` — busca usuário, verifica conta ativa (`usuario.ativo === false` retorna 403), compara senha com `bcrypt.compare()`, assina o JWT com payload `{ id, nome }` e retorna token + dados do usuário.

**Perfil do usuário (`/usuario` — rota privada):**
- `GET /usuario/perfil` — busca o usuário logado pela `req.usuario.id` injetada pelo middleware, excluindo a senha com `{ attributes: { exclude: ['senha'] } }`.
- `PUT /usuario/perfil` — atualização parcial: só atualiza os campos presentes no `req.body` (padrão Patch-like via objeto `dadosAtualizar`). Verifica email duplicado excluindo o próprio usuário. Re-hash de senha se alterada.
- `DELETE /usuario/conta` — soft delete: apenas define `ativo: false`, preservando o registro no banco.

**Alunos e Turmas (`/aluno`, `/turma`):**
- Query de alunos em risco com média < 7 nos semestres 1 e 3, usando `Op.lt` e `Op.in` via `include` JOIN.
- Filtro de turmas DSM/EDM entre semestres 1-4 com `Op.iLike` (case-insensitive), `Op.between` e COUNT de alunos com `sequelize.fn('COUNT', sequelize.col('Alunos.id'))`.

**Segurança em camadas:**

| Camada | Configuração Real |
|---|---|
| **Helmet** | `frameguard: deny`, `hidePoweredBy`, `noSniff`, `hsts` (1 ano, includeSubDomains), `referrerPolicy: no-referrer` |
| **Rate Limit Global** | 100 req / 15min por IP, status 429 |
| **Rate Limit por Rota** | Cadastro e login: 100 req/15min; Perfil (GET/PUT) e conta (DELETE): 50 req/15min |
| **CORS** | Métodos permitidos: GET, POST, PUT, DELETE; header `Authorization` explicitamente permitido |
| **Auth Middleware** | Valida prefixo `Bearer`, extrai token, `jwt.verify()`, injeta `req.usuario` |

**Dados de teste (`insert_teste.sql`):** 30 alunos distribuídos em 8 turmas (`DSM 1A–4A`, `EDM 1A–3A`, `ADS 2A`, `SI 5A`) + 3 alunos sem turma (turmaId null), cobrindo todos os casos de borda das queries.

---

### 9. ⚛️ Desenvolvimento Frontend — React e TypeScript

#### App Calculadora de Média (React + TypeScript)
Gerencia 6 estados com `useState<string>` (notas) e `useState<number | null>` (resultado). A função `calcularMedia()` realiza validação completa: campos vazios retornam erro imediato; valores fora de 0–10 são rejeitados; o resultado é categorizado em Aprovado (≥7), Recuperação (≥5) ou Reprovado (<5). O botão Limpar reseta todos os estados ao valor inicial.

#### App Salário e Média Ponderada (exercícios)
Primeiros contatos com `useState` e eventos controlados. O app de salário calcula percentual de aumento; o de média ponderada aplica pesos fixos (1, 3, 2) e exibe o resultado com `.toFixed(2)`.

#### React Menu com TypeScript e React Router
SPA com navegação entre 6 páginas usando React Router DOM. Implementa um **layout shell** com:
- `Layout.tsx` — wrapper que controla `menuAberto` com `useState`, compõe `SidebarMenu` + `TopNav` + `<main>`
- `SidebarMenu.tsx` — recebe props tipadas `{ aberto: boolean; onClose: () => void }`, renderiza overlay e `<aside>` com classe CSS condicional; links usam `NavLink` com `isActive` para estilo ativo
- `TopNav.tsx` — barra superior com toggle do menu
- 6 páginas: `HomePage`, `SobrePage`, `ServicosPage`, `ContatoPage`, `PerfilPage`, `DisciplinasPage`

#### CRUD Fullstack de Alunos (projeto mais completo do frontend)
Aplicação fullstack com backend e frontend separados.

**Backend** (`server.js`): API Express com PostgreSQL (`pg.Pool`), CRUD completo de alunos com queries parametrizadas, tratamento do erro `23505` (unique constraint do PostgreSQL para e-mail duplicado) e CORS habilitado.

**Frontend** (`App.jsx`): Formulário controlado com um único objeto de estado `form` (padrão recomendado). Lógica de edição inteligente: `editandoId` determina se o submit fará POST ou PUT para a URL correta. `useEffect` carrega os alunos na montagem. Tabela dinâmica renderizada com `.map()`. Feedback de sucesso e erro em estados separados.

---

### 10. 🧪 Testes de Sistemas

#### Testes Unitários Básicos — Projeto 01 (discount, shipping, product, price)

Todos os testes seguem rigorosamente o padrão **AAA (Arrange, Act, Assert)**:

**`discount.test.js`** — 5 testes para `applyDiscount()`:
- Desconto percentual correto (10% de R$50 = R$45)
- Desconto 0% retorna preço original
- Desconto 100% retorna zero
- Desconto negativo lança `Error("Desconto inválido")`
- Desconto > 100 lança `Error("Desconto inválido")`

**`shipping.test.js`** — 5 testes para `calculateShipping()` com regras de negócio por faixa de peso:
- ≤ 1kg → R$10; 1–5kg → R$20; >5kg → R$40
- Teste de valor limite (boundary): exatamente 5kg → R$20
- Peso zero lança `Error("Peso inválido")`

#### Calculadora — Projeto 02 (coreMath + businessLogic)

**`coreMath.test.js`** — 12 testes cobrindo `add()`, `subtract()`, `multiply()` e `divide()` com valores positivos, negativos, zero e divisão por zero (`toThrow`).

#### TDD — Projeto 03 (gradeUtils)

Exercício de TDD puro: os **testes já estavam escritos** e a missão era implementar as funções para fazê-los passar (ciclo Red-Green). Funções a implementar: `calcAverage()` (com validações para array vazio, notas < 0 ou > 10, entrada nula ou string), `isApproved()`, `getStatus()` (Aprovado/Recuperação/Reprovado) e `getLetterGrade()` (A/B/C/D/F).

#### TDD — Leaderboard de Jogadores

Implementação completa do `leaderboard.js` a partir de testes pré-escritos:
- `createPlayer()` — cria jogador com `winRate` calculado por `calcWinRate()` e `rank` por `getRank()`, validando nome vazio e wins > totalGames
- `getTopPlayer()` — percorre array com `forEach`, retorna o jogador de maior `winRate`; lança erro para array vazio
- `filterByRank()` — valida ranks contra lista de valores aceitos; retorna `players.filter()`
- `getLeaderboardSummary()` — conta jogadores por rank com `switch/case` em um objeto acumulador

#### Testes Avançados — Mocks e Spies (Projeto 04)

**`notificationService.test.js`** demonstra técnicas avançadas de teste:
- **Mock de dependência**: `mockEmail = { send: vi.fn().mockResolvedValue(true) }` — o `emailService` real é substituído por um mock injetado via construtor (inversão de dependência)
- **Spy em método real**: `vi.spyOn(logger, 'log')` observa chamadas ao logger sem substituí-lo
- **Teste assíncrono**: uso de `async/await` em testes que chamam `notify()`
- **Assertions específicas**: `toHaveBeenCalledOnce()`, `toHaveBeenCalledWith('Notificação enviada para ana@gmail.com')`, `toHaveBeenCalledTimes(1)`
- **Ciclo de vida**: `beforeEach` para recriar instâncias e `afterEach` com `vi.restoreAllMocks()` para limpar spies

#### BDD com Gherkin — Projeto 05

**`GHERKIN.md`** define cenários em linguagem natural (Given/When/Then) para a feature de autenticação:

```gherkin
Scenario: Cadastro com dados válidos
  Given que tenho o email "maria@email.com" e a senha "Senha123"
  When  eu me cadastro no sistema
  Then  minha conta é criada com sucesso
```

**`authService.test.js`** traduz os cenários Gherkin para testes Vitest com estrutura `describe` (Feature) + `it` (Scenario). A classe `AuthService` valida email com regex, senha mínima de 6 caracteres, email único e credenciais de login. `beforeEach` recria a instância para isolamento entre cenários.

---

## 💡 Principais Competências Demonstradas

```
Backend
├── APIs RESTful          Rotas, status HTTP corretos, validações de entrada
├── MVC                   Separação clara de Controller, Model e Routes
├── PostgreSQL            Pool de conexões, queries parametrizadas (anti SQL Injection)
├── Sequelize ORM         define(), sync(), findAll(), Op, include (JOIN), fn('COUNT')
├── JWT                   Geração, verificação, middleware de proteção de rotas
├── bcryptjs              Hash de senhas, comparação segura
├── Segurança HTTP        Helmet (7 diretivas), Rate Limiting por rota, CORS configurado
└── Boas práticas         .env para segredos, soft delete, exclusão de senha da resposta

Frontend
├── React Hooks           useState (tipado), useEffect, estado de formulário centralizado
├── TypeScript            Tipagem explícita em props, estados e parâmetros
├── React Router DOM      SPA, NavLink com isActive, layout shell, 6 páginas
├── Consumo de API        fetch() com GET/POST/PUT/DELETE, tratamento de erros HTTP
└── Formulário controlado Edição e criação no mesmo form via estado editandoId

Testes
├── Vitest                describe/it/test/expect com padrão AAA
├── Cobertura             Happy path + edge cases + erro esperado (toThrow)
├── TDD                   Ciclo Red-Green; implementação guiada pelos testes
├── BDD / Gherkin         Feature/Scenario/Given/When/Then; rastreabilidade de requisitos
├── Mocks (vi.fn)         Isolamento de dependências externas (emailService)
└── Spies (vi.spyOn)      Observação de chamadas sem substituir implementação real
```

---

## ▶️ Como Executar os Projetos

### Pré-requisitos
- Node.js 18+
- PostgreSQL instalado e rodando
- npm ou yarn

### Projeto Integrador (Backend principal)

```bash
cd "Desenvolvimento Backend/Projeto integrador"
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais do PostgreSQL e JWT_SECRET

npm start
# Servidor disponível em http://localhost:<API_PORT>
```

O `sequelize.sync({ alter: true })` cria/atualiza as tabelas automaticamente na primeira execução. Use o arquivo `src/database/insert_teste.sql` para popular dados.

**Rotas disponíveis:**

| Método | Rota | Autenticação |
|---|---|---|
| POST | `/auth/cadastro` | Pública |
| POST | `/auth/login` | Pública |
| GET | `/usuario/perfil` | JWT obrigatório |
| PUT | `/usuario/perfil` | JWT obrigatório |
| DELETE | `/usuario/conta` | JWT obrigatório |
| GET | `/aluno` | JWT obrigatório |
| GET | `/aluno/filtro` | JWT obrigatório |
| GET | `/turma/filtro` | JWT obrigatório |


### Testes de Sistemas

```bash
# Testes unitários
cd "Teste de Sistemas/Exercicio teste unitario"
npm install
npx vitest

# TDD — Leaderboard
cd "Teste de Sistemas/TDD"
npm install
npx vitest

# Testes avançados (mocks/spies)
cd "Teste de Sistemas/04-advanced-project"
npm install
npx vitest

# BDD
cd "Teste de Sistemas/05-bdd-project/demo"
npm install
npx vitest
```

---

