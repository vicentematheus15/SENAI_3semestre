# 📋 Gherkin — Demo ao Vivo

# Feature: Autenticação de Usuário

```gherkin
Feature: Autenticação de Usuário

  # ── US-01: Cadastro ─────────────────────────────────────────

  Scenario: Cadastro com dados válidos
    Given que tenho o email "maria@email.com" e a senha "Senha123"
    When  eu me cadastro no sistema
    Then  minha conta é criada com sucesso
    And   o resultado contém meu email

  Scenario: Cadastro com email inválido
    Given que tenho o email "email-invalido" e a senha "Senha123"
    When  eu tento me cadastrar
    Then  o sistema lança erro "Email inválido"

  Scenario: Cadastro com senha muito curta
    Given que tenho o email "maria@email.com" e a senha "123"
    When  eu tento me cadastrar
    Then  o sistema lança erro "Senha deve ter no mínimo 6 caracteres"

  Scenario: Cadastro com email já existente
    Given que "maria@email.com" já está cadastrado no sistema
    When  eu tento cadastrar "maria@email.com" novamente
    Then  o sistema lança erro "Email já cadastrado"

  # ── US-02: Login ─────────────────────────────────────────────

  Scenario: Login com credenciais corretas
    Given que "maria@email.com" / "Senha123" está cadastrado
    When  eu faço login com essas credenciais
    Then  o login é bem-sucedido
    And   o resultado contém meu email

  Scenario: Login com senha incorreta
    Given que "maria@email.com" está cadastrado
    When  eu faço login com a senha "SenhaErrada"
    Then  o sistema lança erro "Credenciais inválidas"

  Scenario: Login com email não cadastrado
    Given que o sistema não tem nenhum usuário cadastrado
    When  eu tento fazer login com "naoexiste@email.com"
    Then  o sistema lança erro "Credenciais inválidas"
```
