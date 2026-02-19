// Utilize a sintaxe de campos privados do JavaScript (prefixo #) para criar uma classe Cofre. O segredo (senha) e o conteúdo devem ser inacessíveis de fora da classe. Crie métodos públicos apenas para inserir ou retirar itens, exigindo a senha correta.

class Cofre {
  #senha;
  #conteudo;

  constructor(senhaInicial) {
    this.#senha = senhaInicial;
    this.#conteudo = [];
  }

  // Método privado para validar a senha
  #validarSenha(senhaInformada) {
    return senhaInformada === this.#senha;
  }

  // Método público para inserir item
  inserirItem(item, senhaInformada) {
    if (this.#validarSenha(senhaInformada)) {
      this.#conteudo.push(item);
      console.log("Item inserido com sucesso!");
    } else {
      console.log("Senha incorreta. Acesso negado.");
    }
  }

  // Método público para retirar item
  retirarItem(item, senhaInformada) {
    if (this.#validarSenha(senhaInformada)) {
      const indice = this.#conteudo.indexOf(item);

      if (indice !== -1) {
        this.#conteudo.splice(indice, 1);
        console.log("Item retirado com sucesso!");
      } else {
        console.log("Item não encontrado no cofre.");
      }
    } else {
      console.log("Senha incorreta. Acesso negado.");
    }
  }

  // Método opcional para listar itens (também protegido por senha)
  listarItens(senhaInformada) {
    if (this.#validarSenha(senhaInformada)) {
      return [...this.#conteudo]; // retorna uma cópia, não o array original
    } else {
      console.log("Senha incorreta. Acesso negado.");
      return null;
    }
  }
}

//teste que consegue acessar
const meuCofre = new Cofre("1234");

meuCofre.inserirItem("Documento", "1234");
meuCofre.inserirItem("Joia", "1234");

console.log(meuCofre.listarItens("1234"));

meuCofre.retirarItem("Joia", "1234");
console.log(meuCofre.listarItens("1234"));

//teste que nao consegue
// console.log(meuCofre.#senha); 
// console.log(meuCofre.#conteudo); 