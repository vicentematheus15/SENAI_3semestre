function LoginBox() {
  return (
    <section className="tela-login">
      <form className="card-login">
        <h1>Login</h1>

        <label>E-mail</label>
        <input type="email" placeholder="Digite seu e-mail" />

        <label>Senha</label>
        <input type="password" placeholder="Digite sua senha" />

        <button type="submit">Entrar</button>
      </form>
    </section>
  );
}

export default LoginBox;