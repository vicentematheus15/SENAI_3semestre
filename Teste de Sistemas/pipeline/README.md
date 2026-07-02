# 🔄 PROJETO 9 — Pipeline de CI: Docker + GitHub Actions

---

## 🎯 Objetivo

Aprender a **automatizar a execução de testes** em um pipeline de Integração Contínua (CI), dominando:

- **Docker** — empacotar o projeto + testes em um container reproduzível
- **Docker Compose** — orquestrar a execução dos testes com um comando
- **GitHub Actions** — executar o pipeline automaticamente em todo push/PR
- **Cache de dependências** — acelerar o pipeline com cache do npm
- **Matriz de testes** — rodar em múltiplas versões do Node
- **Auditoria de segurança** — verificar vulnerabilidades nas dependências

O projeto tem um módulo simples (cálculo de desconto e frete) com 17 testes Vitest. **O foco não está no código, mas na automação ao redor dele.**

---

## 📚 Conceitos da Aula

### 1. O que é CI (Integração Contínua)?

CI é a prática de **integrar código frequentemente** (vários commits por dia) e **rodar testes automaticamente** a cada integração. O objetivo é detectar problemas o mais cedo possível.

```
  developer → git push → GitHub → CI Pipeline → ✅ verde / ❌ vermelho
                                         │
                          ┌──────────────┼──────────────┐
                          ▼              ▼              ▼
                     instala deps    roda testes    auditoria
```

| Sem CI | Com CI |
|---|---|
| "Na minha máquina funciona" | Testes rodam em ambiente idêntico para todos |
| Bugs descobertos dias depois | Bugs detectados em minutos |
| Revisão manual de PRs pesada | PR só é mergeable se os testes passarem |
| Dependência de disciplina humana | Automação garante qualidade |

---

### 2. Docker — Reprodutibilidade

O Docker empacota o projeto + suas dependências + o runtime (Node) em uma **imagem imutável**. Quem rodar essa imagem tem exatamente o mesmo ambiente.

```dockerfile
FROM node:22-slim       # 1. base: Node LTS leve
WORKDIR /app            # 2. diretório de trabalho
COPY package*.json ./   # 3. copia deps primeiro (cache de camada)
RUN npm ci              # 4. instala deps determinísticas
COPY . .                # 5. copia código fonte
CMD ["npm", "run", "test:run"]  # 6. comando padrão: testes
```

**Por que copiar `package.json` antes do código?**

O Docker constrói imagens em **camadas** e faz cache. Se você mudar o código mas não o `package.json`, a camada `npm ci` é reutilizada do cache — o build fica muito mais rápido.

```
Camada 1: FROM node:22-slim        ← cache (raramente muda)
Camada 2: COPY package.json        ← cache (muda só quando deps mudam)
Camada 3: RUN npm ci               ← cache (reutiliza se camada 2 não mudou)
Camada 4: COPY . .                 ← invalidada a cada commit (tudo bem)
```

---

### 3. Docker Compose — Orquestração simples

O `docker-compose.yml` define como rodar o container com um único comando:

```yaml
services:
  tests:
    build: .                    # constrói a imagem do Dockerfile
    command: npm run test:run   # sobrescreve o CMD
    volumes:
      - ./coverage:/app/coverage  # extrai relatório de cobertura
```

```bash
docker compose run --rm tests
```

O `--rm` remove o container após a execução — estado limpo a cada run.

---

### 4. GitHub Actions — O pipeline automatizado

O GitHub Actions é o sistema de CI integrado ao GitHub. Ele roda **workflows** (arquivos YAML em `.github/workflows/`) em **runners** (máquinas virtuais) em resposta a **gatilhos**.

```yaml
on:                    # 1. Gatilhos: quando rodar
  push:
    branches: [master]
  pull_request:

jobs:                  # 2. Jobs: conjuntos de passos
  test-native:         # 3. Job: testes nativos (sem Docker)
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [20, 22]   # 4. Matriz: roda em múltiplas versões
    steps:
      - uses: actions/checkout@v4        # 5. Clona o repo
      - uses: actions/setup-node@v4      # 6. Instala Node
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'                   # 7. Cache de deps
      - run: npm ci                      # 8. Instala deps
      - run: npm run test:run            # 9. Roda testes
```

**Anatomia de um workflow:**

| Conceito | O que é |
|---|---|
| `on` | Gatilho: push, PR, schedule, manual |
| `jobs` | Conjuntos independentes de passos (rodam em paralelo) |
| `steps` | Passos sequenciais dentro de um job |
| `uses` | Ação reutilizável da comunidade (ex: `actions/checkout`) |
| `runs-on` | Sistema operacional do runner (`ubuntu-latest`, `windows-latest`) |
| `matrix` | Combinações de parâmetros (ex: múltiplas versões de Node) |
| `cache` | Reutiliza deps entre runs (acelera muito) |
| `permissions` | Princípio do menor privilégio (segurança) |
| `concurrency` | Cancela runs obsoletos do mesmo branch |

---

### 5. Este pipeline — 3 jobs em paralelo

O workflow `.github/workflows/ci.yml` tem **3 jobs** que rodam em paralelo:

```
              push / pull_request
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
   test-native    test-docker      audit
   (Node 20 + 22)  (container)   (npm audit)
        │              │              │
        ▼              ▼              ▼
   npm ci          docker build   npm audit
   vitest run      docker run     --audit-level=moderate
        │              │              │
        └──────────────┴──────────────┘
                       │
                  ✅ tudo verde?
```

| Job | O que faz | Por quê? |
|---|---|---|
| `test-native` | Instala Node + deps + roda testes | Caminho mais simples, testa múltiplas versões |
| `test-docker` | Constrói imagem + roda no container | Garante que o Docker funciona (igual ao local) |
| `audit` | `npm audit` nas dependências | Detecta vulnerabilidades conhecidas |

---

## 📁 Estrutura do Projeto

```
09-ci-pipeline/
├── src/
│   ├── discount.js          ← regras de desconto (lógica simples)
│   └── shipping.js          ← cálculo de frete
├── tests/
│   ├── discount.test.js     ← 11 testes do discount
│   └── shipping.test.js     ← 6 testes do shipping
├── Dockerfile               ← empacota projeto + testes em container
├── docker-compose.yml       ← orquestra a execução dos testes
├── .dockerignore            ← exclui node_modules/coverage do container
├── vitest.config.js         ← config do Vitest (com coverage)
├── package.json
└── README.md

.github/workflows/
└── ci.yml                   ← workflow do GitHub Actions (na raiz do repo)
```

> ⚠️ **Importante:** o GitHub só lê workflows de `.github/workflows/` na **raiz do repositório**, não de subpastas. Por isso o `ci.yml` fica na raiz, não dentro do projeto 09.

---

## 📦 Setup e Execução

### Opção 1: Rodar testes localmente (sem Docker)

```bash
cd 09-ci-pipeline
npm install
npm run test:run          # modo headless (CI)
npm test                  # modo watch (dev)
npm run test:coverage     # com cobertura
```

### Opção 2: Rodar testes no Docker

```bash
cd 09-ci-pipeline

# Constrói a imagem
docker build -t ci-pipeline-tests .

# Roda os testes no container
docker run --rm ci-pipeline-tests
```

### Opção 3: Rodar com Docker Compose

```bash
cd 09-ci-pipeline
docker compose run --rm tests
```

### Opção 4: CI no GitHub (automático)

O pipeline roda **automaticamente** quando você:
- Faz `git push` para `master`
- Abre um Pull Request que toque no projeto 09

Para ver o resultado: aba **Actions** no GitHub.

---

## 🧪 Os Testes

O projeto tem 17 testes Vitest em 2 arquivos:

### `discount.test.js` (11 testes)

| # | Teste | Conceito |
|---|---|---|
| 1 | Aplica desconto percentual | asserção de cálculo |
| 2 | Preço original com desconto zero | caso de borda |
| 3 | Arredonda para 2 casas | ponto flutuante |
| 4 | Rejeita preço negativo | validação |
| 5 | Rejeita percentual fora do intervalo | validação |
| 6 | Faixa 0% abaixo de R$ 100 | tierDiscount |
| 7 | Faixa 5% entre R$ 100-199 | tierDiscount |
| 8 | Faixa 10% entre R$ 200-499 | tierDiscount |
| 9 | Faixa 15% acima de R$ 500 | tierDiscount |
| 10 | Soma desconto de faixa + cupom | calculateFinalPrice |
| 11 | Limita desconto total a 100% | caso de borda |

### `shipping.test.js` (6 testes)

| # | Teste | Conceito |
|---|---|---|
| 1 | Calcula frete por peso | asserção de cálculo |
| 2 | Frete grátis acima de R$ 300 | regra de negócio |
| 3 | Rejeita peso negativo | validação |
| 4 | Prazo por região | estimateDeliveryDays |
| 5 | Case-insensitive | normalização |
| 6 | Rejeita região desconhecida | validação |

---

## 🐳 Docker — Comandos úteis

| Comando | Descrição |
|---|---|
| `docker build -t ci-pipeline-tests .` | Constrói a imagem |
| `docker run --rm ci-pipeline-tests` | Roda testes no container |
| `docker run --rm ci-pipeline-tests npm run test:coverage` | Roda com cobertura |
| `docker compose run --rm tests` | Roda via compose |
| `docker images` | Lista imagens construídas |
| `docker rmi ci-pipeline-tests` | Remove a imagem |

---

## ⚙️ GitHub Actions — Como ver o pipeline rodando

1. Faça `git push` do projeto para um repositório no GitHub
2. Vá na aba **Actions** do repositório
3. Veja os 3 jobs rodando em paralelo
4. Clique em cada job para ver os logs detalhados
5. Se todos ficarem verdes ✅, o pipeline passou

**Dica:** abra um PR propositalmente quebrando um teste e veja o pipeline ficar vermelho ❌. É a melhor forma de entender o valor do CI.

---

## 📝 Atividade para o Aluno

1. **Rode o pipeline localmente** com Docker:
   ```bash
   docker compose run --rm tests
   ```
   Observe que o resultado é idêntico a rodar `npm run test:run` nativo.

2. **Quebre um teste propositalmente**: mude um valor esperado em `discount.test.js` (ex: `expect(applyDiscount(100, 10)).toBe(95)`) e rode os testes. Veja o CI falhar.

3. **Adicione um novo teste** para uma função nova em `shipping.js` (ex: frete expresso com acréscimo de 50%). Faça commit e veja o CI rodar automaticamente.

4. **Adicione uma versão de Node à matriz**: no `ci.yml`, mude `node-version: [20, 22]` para `[20, 22, 24]` e veja o pipeline rodar em 3 versões.

5. **Adicione um step de lint**: instale o ESLint e adicione um step `npm run lint` no job `test-native` antes dos testes.

---

## ✅ Checklist de Aprendizado

Antes de passar para o próximo projeto, verifique se você consegue:

- [ ] Explicar o que é CI e por que é importante
- [ ] Construir uma imagem Docker com Dockerfile
- [ ] Explicar por que copiar `package.json` antes do código melhora o cache
- [ ] Rodar testes dentro de um container Docker
- [ ] Ler um workflow do GitHub Actions e explicar cada seção
- [ ] Explicar a diferença entre `on: push` e `on: pull_request`
- [ ] Usar `matrix` para testar em múltiplas versões
- [ ] Ver o resultado do pipeline na aba Actions do GitHub

---

## 🛠️ Stack

- **Runtime:** Node.js 22
- **Testes:** Vitest
- **Containerização:** Docker + Docker Compose
- **CI:** GitHub Actions

---

## 🚀 Comandos Úteis

| Comando | Descrição |
|---|---|
| `npm run test:run` | Roda testes em modo headless |
| `npm run test:coverage` | Roda testes com cobertura |
| `docker build -t ci-pipeline-tests .` | Constrói imagem Docker |
| `docker run --rm ci-pipeline-tests` | Roda testes no container |
| `docker compose run --rm tests` | Roda via Docker Compose |
