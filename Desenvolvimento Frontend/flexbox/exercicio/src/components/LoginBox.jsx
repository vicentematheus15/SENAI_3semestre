function LoginBox() {
    return(
        <section className="login">

            <form className="login-form">

                <h1 className="login-titulo">
                    Login
                </h1>

                <label className="login-label">
                    Email
                </label>

                <input 
                    className="login-input"
                    type="text" 
                    placeholder="Digite seu email" 
                />

                <label className="login-label">
                    Senha
                </label>

                <input 
                    className="login-input"
                    type="password" 
                    placeholder="Digite sua senha" 
                />

                <button className="login-botao">
                    Entrar
                </button>

            </form>

        </section>
    )
}

export default LoginBox