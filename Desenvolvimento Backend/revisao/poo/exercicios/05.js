// Crie uma classe Usuario com um campo privado para a idade. Use um setter para validar se a idade inserida é um número positivo e realista (ex: menor que 120). Use um getter para ler o valor. Tente atribuir valores inválidos e capture os erros.

class Usuario {
  #idade;

  set idade(valor) {
    if (valor <= 0 || valor >= 120 || typeof valor !== "number") {
      throw new Error("Idade inválida");
    }
    this.#idade = valor;
  }

  get idade() {
    return this.#idade;
  }
}

// teste valores
const u = new Usuario();

// válido
try {
  u.idade = 25; 
  console.log(u.idade);

// inválidos
  u.idade = -5;
} catch (e) {
  console.log(e.message);
}

try {
  u.idade = 150;
} catch (e) {
  console.log(e.message);
}

try {
  u.idade = "abc";
} catch (e) {
  console.log(e.message);
}