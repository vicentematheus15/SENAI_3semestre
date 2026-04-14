export default function ContatoPage() {
  return (
    <section>
      <h1>Contato</h1>
      <form className="contact-form">
        <label>
          Nome
          <input type="text" placeholder="Digite seu nome" />
        </label>
        <label>
          E-mail
          <input type="email" placeholder="Digite seu e-mail" />
        </label>
        <label>
          Mensagem
          <textarea rows={5} placeholder="Digite sua mensagem"></textarea>
        </label>
        <button type="button">Enviar</button>
      </form>
    </section>
  )
}