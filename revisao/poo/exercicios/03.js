// Crie uma classe CarrinhoDeCompras que possa armazenar objetos da classe Produto. Implemente métodos para adicionar produtos ao carrinho e um método para calcular o valor total da compra somando os preços dos produtos contidos.

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}


class CarrinhoDeCompras {
  constructor() {
    this.produtos = []; // array para armazenar os produtos
  }


  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

 
  calcularTotal() {
    let total = 0;

    for (let produto of this.produtos) {
      total += produto.preco;
    }

    return total;
  }
}


const produto1 = new Produto("Mouse", 50);
const produto2 = new Produto("Teclado", 120);
const produto3 = new Produto("Monitor", 800);

const carrinho = new CarrinhoDeCompras();

carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);
carrinho.adicionarProduto(produto3);

console.log("Total da compra: R$", carrinho.calcularTotal());