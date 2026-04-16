// Crie uma classe Livro com atributos como titulo, autor e ano. Adicione um método descrever() que retorna uma string formatada com os detalhes do livro. Instancie três livros diferentes e exiba suas descrições

class Livro{
    constructor(titulo, autor, ano){
        this.tituloLivro = titulo;
        this.autorLivro = autor;
        this.anoPublicacao = ano;
    }

    descrever(){
        return `Título: ${this.tituloLivro} | Autor: ${this.autorLivro} | Ano de publicação: ${this.anoPublicacao}`
    }
}

const primeiroLivro = new Livro("Assassins Creed Brotherhood", "Oliver Bowden", 2009);
const segundoLivro = new Livro("O Código da Vinci", "Dan Brown", 2003);
const terceiroLivro = new Livro("O Filho de Netuno", "Rick Riordan", 2013);

console.log(primeiroLivro.descrever());
console.log(segundoLivro.descrever());
console.log(terceiroLivro.descrever());

